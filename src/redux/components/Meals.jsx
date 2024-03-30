import React from 'react';
import { useState } from 'react'; // Import useState
import { useSelector } from "react-redux";
import { useGetAllMealsQuery } from "../redux/slices/mealsApi";
import Loading from "./Loading";
import Notfound from "./Notfound";
import MealCard from "./MealCard";
import "./MealCard.css"
import Navbar from "./Navbar";
import mealImg from '../assets/meal.png'
import mealImg2 from '../assets/meal2.png'

function Meals() {
  const [selectedCategory, setSelectedCategory] = useState(null); // Initialize selectedCategory state

  const { data, error, isLoading } = useGetAllMealsQuery();
  const { items: meals, status } = useSelector((state) => state.meals);
  
  const handleDarkModeToggle = () => {
    document.body.classList.toggle("darkk");
};
  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat); // Update selected category
  }
  return (

    <>
      {/* ============================= header ==============================*/}

      <header className="meal-header">
      <Navbar toggleDarkMode={handleDarkModeToggle} />
        <div className="md:container header-flex  md:mx-auto gap-0 justify-center items-center py-5">
          <div className="flex items-start flex-col">
            <div className="flex justify-normal items-center">
              <div className=" salads">
                <div className="flex flex-col justify-center items-center">
                  <img className="mealImgsm" src={mealImg} alt="mealImg" />
                  <h4 className="text text-white font-semibold">Avocado salad</h4>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <img className="mealImgsm" src={mealImg2} alt="mealImg" />
                  <h4 className="text text-white font-semibold">Sezar salad</h4>
                </div>
              </div>
              <img className="rotate-center mealImg" src={mealImg} alt="mealImg" />
            </div>
            <div className=" salads">
              <h6 className="w-45 text text-gray-100 font-normal">SMOKED MILKFISH GARDEN
                MEAL PLAN A</h6>
              <h6 className="w-49 text-justify text-gray-300 text font-thin">Includes: Vegetable Lasagna, Fresh Fruit Platter,<br></br> Fresh Lemon Juice, and Creme Brulee</h6>
            </div>
          </div>

          <div className="flex flex-col resp-text">
            <div className="badge bg-rose-400 md:text-center sm:text-center  text-white h-9">WHAT'S NEW</div>
            <h1 className="text-5xl ">Healthy Meals<br></br>
              Made for You.</h1>
            <h6 className="text text-md w-80">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo.
            </h6>
          </div>
        </div>
      </header>

       {/* ============================= filter ==============================*/}
      <section className="explore-meals">
        <h3 className="flex justify-center font-bold py-10 align-middle">EXPLORE OUR MEALS</h3>
        <div className="categContainer gap-10 flex-row flex">
        <div onClick={() => handleCategoryChange(null)} className={`category cursor-pointer hover:bg-violet-500 hover:text-white border-2 rounded-box ${selectedCategory === null ? 'bg-violet-100 border-violet-300 hover:text-white' : 'bg-transparent border-transparent hover:text-white'} flex flex-col items-center`}>
            <i className="fa-solid fa-list fa-2xl catIcon"></i>
            <p className="font-semibold lg:text-sm text-gray-600 text-center">ALL</p>
          </div>
          <div onClick={() => handleCategoryChange('vegan')} className={`category cursor-pointer hover:bg-violet-500 hover:text-white border-2 rounded-box ${selectedCategory === 'vegan' ? 'bg-violet-100 border-violet-300 hover:text-white' : 'bg-transparent border-transparent'} flex flex-col items-center`}>
            <i className="fa-solid fa-carrot fa-2xl catIcon"></i>
            <p className="font-semibold lg:text-sm text-gray-600 text-center">VEGAN MEALS</p>
          </div>
          <div onClick={() => handleCategoryChange('vegetarian')} className={`category cursor-pointer hover:bg-violet-500 hover:text-white border-2 rounded-box ${selectedCategory === 'vegetarian' ? 'bg-violet-100 border-violet-300 hover:text-white' : 'bg-transparent border-transparent'} flex flex-col items-center`}>
            <i className="fa-solid fa-leaf fa-2xl catIcon"></i>
            <p className="font-semibold text-gray-600 text-center">VEGETARIAN MEALS</p>
          </div>
          <div onClick={() => handleCategoryChange('non-vegetarian')} className={`category cursor-pointer hover:bg-violet-500  border-2 rounded-box ${selectedCategory === 'non-vegetarian' ? 'bg-violet-100 border-violet-300 hover:text-white' : 'bg-transparent border-transparent'} flex flex-col items-center`}>
            <i className="fa-solid fa-bowl-food fa-2xl catIcon"></i>
            <p className="font-semibold text-gray-600 text-center">NORMAL MEALS</p>
          </div>
        </div>
      </section>


      {/* ============================= cards ==============================*/}
      <div className="container mx-auto p-8">
        {isLoading ? (
          <Loading />
        ) : error ? (
          <Notfound />
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {data?.items
              .filter((meal) => !selectedCategory || meal.category === selectedCategory) // Filter meals based on selected category
              .map((meal) => (
                <div key={meal._id}>
                  <MealCard data={meal} className="flex-none" />
                </div>
              ))}
          </div>
        )}
      </div>


      {/* <MealCarousel/> */}

    </>
  );
}

export default Meals;
