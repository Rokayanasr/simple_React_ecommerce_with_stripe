import { createSlice } from "@reduxjs/toolkit"
import { toast } from "react-toastify"

const initialState = {
    cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")):[],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
}
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action) {
            //if the item exists it will be 0 or greater else it will be -1
            const itemIndex = state.cartItems.findIndex(item => item._id === action.payload._id)
            if(itemIndex>= 0){
                state.cartItems[itemIndex].cartQuantity +=1
                toast.info(`${state.cartItems[itemIndex].title} is added`, {position:"bottom-left"})
            }else{
                const tempMeal = { ...action.payload, cartQuantity: 1 }
                state.cartItems.push(tempMeal)
                console.log(action.payload)
                toast.success(`${action.payload.title} added to the cart`, {position:"bottom-left"})
            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
        },
        removeFromCart(state,action){
            const nextCartItems = state.cartItems.filter((cartItem) => {
                return cartItem._id !== action.payload._id
            })
            state.cartItems = nextCartItems
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
            
            toast.error(`${action.payload.title} removed from cart`, {
                position:"bottom-left"
            })
        },
        decreaseCart(state,action){
            const itemIndex = state.cartItems.findIndex(
                //return cartItem when the cartItem is match the pyload.action that is caming (the meal)
                cartItem => cartItem._id === action.payload._id
            )
            if(state.cartItems[itemIndex].cartQuantity > 1){
                state.cartItems[itemIndex].cartQuantity -= 1
            }else if(state.cartItems[itemIndex].cartQuantity === 1 ){
                const nextCartItems = state.cartItems.filter(
                    (cartItem) => cartItem._id !== action.payload._id
                )
                state.cartItems = nextCartItems
                toast.info(`${action.payload.title} quantity decreased`, {position:"bottom-left"})
            }
            localStorage.setItem("cartItems",JSON.stringify(state.cartItems))
        },
        increaseCart(state,action){
            const itemIndex = state.cartItems.findIndex(
                cartItem => cartItem._id === action.payload._id
            )
            if (itemIndex >= 0){
                state.cartItems[itemIndex].cartQuantity += 1
            }else{
                const tempMeal = { ...action.payload,cartQuantity:1}
                state.cartItems.push(tempMeal)
                toast.success(`${action.payload.title} quantity added`, {position:"bottom-left"})
            }
            localStorage.setItem("cartItems",JSON.stringify(state.cartItems))
        },
        clearCart(state,action){
            state.cartItems = [];
            toast.info(`cart is cleared successfully`, {position:"bottom-left"})
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
        },
        getTotals(state, action){
            //reduce gives a total value and it take the previous and current
            // reduce array method has 2 parameters first is the callback function , secound is the 
            let {total , quantity} = state.cartItems.reduce((cartTotal, cartItem)=>{
                const { price , cartQuantity } = cartItem
                const itemTotal = price * cartQuantity
            
                cartTotal.total += itemTotal
                cartTotal.quantity += cartQuantity

                return cartTotal
            },
            {
                total:0,
                quantity:0
            })
            state.cartTotalQuantity = quantity
            state.cartTotalAmount = total
        }
    },

})
export const { addToCart , removeFromCart , decreaseCart , increaseCart , clearCart , getTotals} = cartSlice.actions
export default cartSlice.reducer