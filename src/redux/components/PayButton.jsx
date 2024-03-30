/* eslint-disable react/prop-types */
import React from 'react';
import axios from "axios";
import { useSelector } from "react-redux";
import { url } from "../redux/slices/api";
import { Navigate, useNavigate } from "react-router-dom";


function PayButton({ cartItems }) {
    const navigate = useNavigate()
    const user = useSelector((state) => state.auth);

    const handleCheckout = (event) => {
        event.preventDefault();
        const modifiedCartItems = cartItems.map(item => ({
            _id: item._id,
            title: item.title,
            price: item.price,
            // imageFile: item.imageFile,
            cartQuantity: item.cartQuantity
        }));
        console.log(cartItems)
        axios.post(`${url}/stripe/create-checkout-session`, {
            cartItems:modifiedCartItems,
            userId: user._id
        }).then((res) => {
            if (res.data.url) {
                window.location.href = res.data.url
            }
        })
            .catch((err) => {
                console.log(err.message)
            })
    }
    return (
        <>
            {
                user._id ? (
                    <form action="/create-checkout-session" method="POST">

                    <button type="submit" id="checkout-button" className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                    onClick={handleCheckout}>checkout</button>
                    </form>
                )

                :  (
                    <button className="flex items-center justify-center rounded-md border border-transparent bg-info px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-sky-500"
                    onClick={()=>{navigate("/login")}}
                    >login to check out</button>
                )

            }

        </>
    )
}

export default PayButton