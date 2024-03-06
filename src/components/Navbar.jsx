import "./MealCard.css"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { logoutUser } from "../redux/slices/authSlice";
import { toast } from "react-toastify";
import { Fragment, useEffect, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { removeFromCart, decreaseCart, increaseCart, clearCart, getTotals } from '../redux/slices/cartSlice'
import PayButton from './PayButton'

function Navbar() {
    const [open, setOpen] = useState(true)
    const cart = useSelector((state) => state.cart)
    const auth = useSelector((state) => state.auth);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getTotals())
    }, [cart, dispatch])
    const handleRemoveFromCart = (cartItem) => {
        console.log(cartItem)
        dispatch(removeFromCart(cartItem))
    }
    const handleDecreseQuantity = (cartItem) => {
        dispatch(decreaseCart(cartItem))
    }
    const handleIncreseQuantity = (cartItem) => {
        dispatch(increaseCart(cartItem))
    }
    const handleClearCart = () => {
        dispatch(clearCart())
    }


    const { cartTotalQuantity } = useSelector((state) => state.cart)
    return (
        <div className=" md:container md:mx-auto">
            <div className="navbar flex flex-row justify-between items-center bg-transparent">
                <Link to="/">
                    <div className="flex-1">
                        <a className="text font-bold text-white text-xl">MENTALTH</a>
                    </div>  
                </Link>

                {/* <ul className="flex-3 btns">
                    <Link to="/cart">
                        <li className="btn btn-ghost hover:shadow hover:rounded-full text-l">cart</li>
                    </Link>
                    <Link to="/meals">
                        <li className="btn btn-ghost hover:shadow hover:rounded-full text-l">meals</li>
                    </Link>
                    <Link to="/checkout">
                        <li className="btn btn-ghost hover:shadow hover:rounded-full text-l">checkout</li>
                    </Link>
                </ul> */}

                {/* ================== cart ===================== */}

                <Transition.Root className="" show={open} as={Fragment}>
                    <Dialog as="div" className="relative z-10" onClose={setOpen}>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-in-out duration-500"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in-out duration-500"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-transparent bg-opacity-75 transition-opacity" />
                        </Transition.Child>

                        <div className="fixed inset-0 overflow-hidden">
                            <div className="absolute inset-0 overflow-hidden">
                                <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                                    <Transition.Child
                                        as={Fragment}
                                        enter="transform transition ease-in-out duration-500 sm:duration-700"
                                        enterFrom="translate-x-full"
                                        enterTo="translate-x-0"
                                        leave="transform transition ease-in-out duration-500 sm:duration-700"
                                        leaveFrom="translate-x-0"
                                    // leaveTo="translate-x-full"
                                    >
                                        <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                                            <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                                                <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                                                    <div className="flex items-start justify-between">
                                                        <Dialog.Title className="text-lg font-medium text-gray-900">Shopping cart</Dialog.Title>
                                                        <div className="ml-3 flex h-7 items-center">
                                                            <button
                                                                type="button"
                                                                className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                                                                onClick={() => setOpen(false)}
                                                            >
                                                                <span className="absolute -inset-0.5" />
                                                                <span className="sr-only">Close panel</span>
                                                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                                            </button>
                                                        </div>
                                                    </div>

                                                    {cart.cartItems.length === 0 ? (
                                                        <div>
                                                            <h1>Your cart is empty</h1>
                                                            <Link to="/meals" >
                                                                <button
                                                                    type="button"
                                                                    className="font-medium text-indigo-600 hover:text-indigo-500"
                                                                    onClick={() => setOpen(false)}
                                                                >
                                                                    start Shopping
                                                                    <span aria-hidden="true"> &rarr;</span>
                                                                </button>
                                                            </Link>
                                                        </div>

                                                    ) : (<div className="mt-8">
                                                        <div className="flow-root">
                                                            <ul role="list" className="-my-6 divide-y divide-gray-200">
                                                                {cart.cartItems.map((cartItem) => (
                                                                    <li key={cartItem.id} className="flex py-6">
                                                                        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                                            <img
                                                                                src={`http://localhost:3000/uploads/${cartItem.imageFile}`}
                                                                                alt={cartItem.title}
                                                                                className="h-full w-full object-cover object-center"
                                                                            />
                                                                        </div>

                                                                        <div className="ml-4 flex flex-1 flex-col">
                                                                            <div>
                                                                                <div className="flex justify-between text-base font-medium text-gray-900">
                                                                                    <h3>
                                                                                        <a href={cartItem.href}>{cartItem.title}</a>
                                                                                    </h3>
                                                                                    <p className="ml-4"><span className='text-base font-semibold text-justify'>total price</span><br></br>{cartItem.price * cartItem.cartQuantity} $</p>
                                                                                </div>
                                                                                <form className="max-w-xs mx-auto">
                                                                                    <label
                                                                                        htmlFor="quantity-input"
                                                                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                                                                    >
                                                                                        Choose quantity:
                                                                                    </label>
                                                                                    <div className="relative flex items-center max-w-[8rem]">
                                                                                        <button
                                                                                            type="button"
                                                                                            id="decrement-button"
                                                                                            onClick={() => handleDecreseQuantity(cartItem)}
                                                                                            data-input-counter-decrement="quantity-input"
                                                                                            className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                                                                                        >
                                                                                            <svg
                                                                                                className="w-3 h-3 text-gray-900 dark:text-white"
                                                                                                aria-hidden="true"
                                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                                fill="none"
                                                                                                viewBox="0 0 18 2"
                                                                                            >
                                                                                                <path
                                                                                                    stroke="currentColor"
                                                                                                    strokeLinecap="round"
                                                                                                    strokeLinejoin="round"
                                                                                                    strokeWidth={2}
                                                                                                    d="M1 1h16"
                                                                                                />
                                                                                            </svg>
                                                                                        </button>
                                                                                        <div
                                                                                            type="text"
                                                                                            id="quantity-input"
                                                                                            data-input-counter=""
                                                                                            data-input-counter-min={1}
                                                                                            data-input-counter-max={50}
                                                                                            aria-describedby="helper-text-explanation"
                                                                                            className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                                                        // placeholder={cartItem.cartQuantity}
                                                                                        // defaultValue={cartItem.cartQuantity}
                                                                                        // required=""
                                                                                        >{cartItem.cartQuantity}</div>
                                                                                        <button
                                                                                            type="button"
                                                                                            id="increment-button"
                                                                                            data-input-counter-increment="quantity-input"
                                                                                            className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                                                                                            onClick={() => handleIncreseQuantity(cartItem)}
                                                                                        >
                                                                                            <svg
                                                                                                className="w-3 h-3 text-gray-900 dark:text-white"
                                                                                                aria-hidden="true"
                                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                                fill="none"
                                                                                                viewBox="0 0 18 18"
                                                                                            >
                                                                                                <path
                                                                                                    stroke="currentColor"
                                                                                                    strokeLinecap="round"
                                                                                                    strokeLinejoin="round"
                                                                                                    strokeWidth={2}
                                                                                                    d="M9 1v16M1 9h16"
                                                                                                />
                                                                                            </svg>
                                                                                        </button>
                                                                                    </div>
                                                                                </form>

                                                                                {/* <p className="mt-1 text-sm text-gray-500">{cartItem.color}</p> */}
                                                                            </div>
                                                                            <div className="flex flex-1 items-end justify-between text-sm">
                                                                                {/* <p className="text-gray-500">Quantity: {cartItem.cartQuantity}</p> */}
                                                                                <div className="flex">
                                                                                    <button
                                                                                        type="button"
                                                                                        className="font-medium text-indigo-600 hover:text-indigo-500"
                                                                                        onClick={() => handleRemoveFromCart(cartItem)}
                                                                                    >
                                                                                        Remove
                                                                                    </button>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    )}

                                                </div>

                                                <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                                                    <div className="clear-cart flex justify-center">
                                                        <button onClick={handleClearCart} className='btn btn-outline '>Clear Cart</button>
                                                    </div>
                                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                                        <p>Subtotal</p>
                                                        <p>{cart.cartTotalAmount}</p>
                                                    </div>
                                                    <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                                                    <div className="mt-6">
                                                        <PayButton cartItems={cart.cartItems} />
                                                    </div>
                                                    <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                                                        <p>
                                                            or{' '}
                                                            <Link to="/meals">
                                                                <button
                                                                    type="button"
                                                                    className="font-medium text-indigo-600 hover:text-indigo-500"
                                                                    onClick={() => setOpen(false)}
                                                                >
                                                                    Continue Shopping
                                                                    <span aria-hidden="true"> &rarr;</span>
                                                                </button>
                                                            </Link>

                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Dialog.Panel>
                                    </Transition.Child>
                                </div>
                            </div>
                        </div>
                    </Dialog>
                </Transition.Root>


                <div className="flex-none">
                    <div className="dropdown dropdown-end">
                        <div onClick={() => setOpen(true)} tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                <span className="badge badge-sm indicator-item">{cartTotalQuantity}</span>
                            </div>
                        </div>
                        {/* <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                            <div className="card-body">
                                <span className="font-bold text-lg">8 Items</span>
                                <span className="text-info">Subtotal: $999</span>
                                <Link to="/cart">
                                    <div className="card-actions">
                                        <button className="btn btn-primary btn-block">View cart</button>
                                    </div>
                                </Link>
                            </div>
                        </div> */}
                    </div>
                    {
                        auth._id ? (
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    </div>
                                </div>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <Link to="/meals">
                                <li><a>meals</a></li>
                                </Link>
                                <Link to="/checkout">
                                <li><a>checkout</a></li>
                                </Link>
                                    <li>
                                        <a className="justify-between">
                                            Profile
                                            {/* <span className="badge">New</span> */}
                                        </a>
                                    </li>
                                    <li><a>Settings</a></li>
                                    <li onClick={() => {
                                        dispatch(logoutUser());
                                        toast.warning("you've logged out")
                                    }} ><a>Logout</a></li>
                                </ul>
                            </div>
                        ) : (
                            <>
                                <Link to="/register">
                                    <li className="btn btn-ghost hover:shadow hover:rounded-full text-l">register</li>
                                </Link>
                                <Link to="/login">
                                <li className="btn btn-ghost hover:shadow hover:rounded-full text-l">login</li>
                            </Link>
                            </>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Navbar
