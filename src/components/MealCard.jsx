/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import "./MealCard.css"
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/slices/cartSlice';
import { useNavigate } from "react-router-dom"

function MealCard({ data }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleAddToCart = () => {
    console.log(data)
    dispatch(addToCart(data))
    navigate('/meals', data)
  }
  return (
    <div className="bg-white cardy rounded-lg shadow-lg p-8">
      <div className="relative overflow-hidden">
      <div className="badge h-4/5 flex justify-center items-center text-white bg-cyan-400">{data.category}</div>
        <img className="object-cover cardImg w-full h-full" src={`http://localhost:3000/uploads/${data.imageFile}`} alt={data.title} />
        <div className="hover-meal absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 flex hover-meal items-center justify-center">
          <button className="bg-white  text-gray-900 py-2 px-6 rounded-full font-bold hover:bg-gray-300">View Product</button>
        </div>
      </div>
      <h3 className="text-xl font-bold text-gray-900 mt-4">{data.title}</h3>
      <p className="text-gray-500 text-sm mt-2">{data.description}</p>
      <div className="flex items-center justify-between mt-4">
        <span className="text-rose-400 font-bold text-lg">{data.price} $</span>
        <button className="bg-violet-500 text-white py-2 px-4 rounded-full font-bold hover:bg-violet-400" onClick={handleAddToCart}>Order</button>
      </div>
    </div>

    /* {
    <div className=" sm:w-2/2 border rounded-3xl max-w-sm bg-base-100 m-3 shadow-xl">
      <figure><img className='border rounded-3xl' src={`http://localhost:3000/uploads/${data.imageFile}`} alt={data.title} /></figure>
      <div className="card-body  w-80">
        <div className='flex justify-center items-center px-3'>
          <p className='text-lg text-rose-400 font-black '>{data.price} $</p>
          <div className="badge h-4/5 flex justify-center items-center text-white bg-cyan-400">vegan</div>
        </div>
        <h2 className="text-md card-title">
          {data.title}
        </h2>
        <div className="card-actions flex flex-col sm:flex-row justify-between items-center">
        <p className="text-violet-400 font-bold btn-primary hover:text-violet-600 cursor-pointer hover:underline">details <i className="fa-solid fa-arrow-up-right-from-square"></i></p>
        <button onClick={handleAddToCart} className=" hover:bg-violet-100 rounded-full md:btn-md sm:btn-sm" >
        <i className="fa-solid fa-cart-plus addToCart fa-2xl fill-violet-400 hover:fill-violet-500"></i>
        </button>
        </div>
      </div>
    </div> 
    }*/
  )
}

export default MealCard
