/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import "./MealCard.css"
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../redux/slices/cartSlice';
import { useNavigate } from "react-router-dom"
import Loading from './Loading';
import Notfound from './Notfound';

function MealCard({ data }) {
  // console.log(data)
  const [meal, setMeal] = useState()
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    console.log(data)
    dispatch(addToCart(data))
    navigate('/meals', data)
  }
    const go = () => {
    try {
      // console.log(id)
      setMeal(data)
      console.log(meal)
      document.getElementById('my_modal_3').showModal();
    } catch (error) {
      console.error('Error fetching meal details:', error);
    }
  };



  return (
    <>
      <div className="bg-white cardy rounded-lg shadow-lg">
        <div className="relative overflow-hidden">
          <img className="object-cover cardImg imgW w-full h-full" src={data.imageFile} alt={data.title} />
          <div className="hover-meal absolute btnBg inset-0  bg-violet-600 opacity-80"></div>
          <div className="absolute inset-0 flex hover-meal items-center justify-center">
            <button onClick={go} className="bg-white btn text-cyan-500 py-2 px-6 rounded-full font-bold hover:text-black">More details</button>          </div>
        </div>

        <div className='p-8 detailDev'>
          <div className="badge catBadge h-4/5 flex justify-center items-center text-white bg-cyan-400">{data.category}</div>
          <h3 className="text-xl font-bold text-gray-900 mt-3">{data.title}</h3>
          <div className="flex items-center justify-between mt-1 priceDev">
            <span className="text-rose-400 font-bold text-lg">{data.price} $</span>
            <button className="bg-violet-500 text-white py-2 px-4 rounded-full font-bold hover:bg-violet-400" onClick={handleAddToCart}>Order</button>
          </div>
        </div>
      </div>

      <dialog id="my_modal_3" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          {/* <div className="bg-white rounded-lg shadow-lg p-6">

            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">{meal.title}</h2>
              <span className="text-xl font-semibold text-gray-700">${meal.price}</span>
            </div>
            <div className="mt-4">
              <img src={meal.imageFile} alt={meal.title} className="w-full h-auto rounded-lg" />
            </div>
            <p className="text-gray-600 mt-4">{meal.description}</p>
            <div className="flex justify-between items-center mt-4">
              <button className="bg-violet-500 text-white py-2 px-4 rounded-full font-bold hover:bg-violet-400">Add to Cart</button>
              <div className="flex items-center">
                <span className="text-gray-700 mr-2">Category:</span>
                <span className="text-gray-600">{meal.category}</span>
              </div>
            </div>

          </div> */}
        </div>
      </dialog>
    </>
  )
}

export default MealCard;
