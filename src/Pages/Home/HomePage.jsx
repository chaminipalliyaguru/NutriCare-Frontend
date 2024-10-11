import img_1 from "../../assets/Home_img_1.png";
import img_5 from "../../assets/ChatGPT.png";
import img_6 from "../../assets/Food Bar.png";
import img_7 from "../../assets/surgery-img.png";
import React, { useEffect, useState } from 'react'
import { Input, Button } from "@material-tailwind/react";
import axios from 'axios'
import { Link } from 'react-router-dom';
import RecipeCard from "../../Components/Recipes/RecipeCard";

function HomePage() {
  const [recipies, setRecipies] = React.useState([])
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(null)

  const [condition, setName] = useState('')

  async function getAll() {
    try {
      setLoading(true)
      const response = await axios.get('https://nutricarebe-ffhmggb4gefgbwch.canadacentral-01.azurewebsites.net/recipe/get-all?limit=3')
      setRecipies(response.data)
    } catch (error) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  React.useEffect(() => {
    getAll()
  }, [])

  return (
    <div>
      {/* 1st section: welcome part */}
      <div className="flex flex-col lg:flex-row items-center justify-between h-auto pt-8 lg:pt-20 px-4 lg:px-40">
        <div className="relative flex bg-clip-border rounded-xl bg-amber-50 text-gray-700 shadow-md w-full lg:max-w-[74rem] flex-col lg:flex-row">
          <div className="relative w-full lg:w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-t-lg lg:rounded-r-none lg:rounded-t-none bg-clip-border shrink-0">
             {/* <div className="flex flex-col lg:flex-row items-center justify-between mt-10 ml-10 mr-10">
        <div className="relative flex bg-clip-border rounded-xl bg-amber-50 text-gray-700 shadow-md w-full lg:max-w-[74rem] flex-col lg:flex-row">
          <div className="relative w-full lg:w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-t-lg lg:rounded-r-none lg:rounded-t-none bg-clip-border shrink-0 "> */}
          <img 
              src={img_1}
              alt="Meal image"
              className="object-cover w-full h-full"
            />
          </div>


          <div className="p-6">
            <h6 className="block mb-4 font-sans text-base font-semibold leading-relaxed tracking-normal text-gray-700 uppercase">
              Welcome to NutriCare!
            </h6>
            <h4 className="block mb-2 font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900">
              Discover Personalized Health Recipes
            </h4>
            <p className="block mb-8 font-sans text-base font-normal leading-relaxed text-gray-700">
              NutriCare is your ultimate destination for personalized, healthy
              recipes tailored to various health conditions. Our platform
              leverages AI to provide meal recommendations, health tips, and
              resources to help you manage your wellness effectively.
            </p>
            <Link to ='/recipe_vault' className="inline-block">
              <button
                className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase transition-all rounded-lg hover:bg-gray-900/10 active:bg-gray-900/20"
                type="button"
              >
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </button>
              </Link>
          </div>
        </div>
      </div>

      {/* 2nd section of the page */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 place-items-center mt-8 mb-24 px-4 sm:px-6 lg:px-8">
        {!loading && recipies.map((recipe) => {
          return <RecipeCard
            key={recipe._id}
            id={recipe._id}
            title={recipe.title}
            description={recipe.description}
            prepTime={recipe.prepTime}
            serves={recipe.serve}
            imgSrc={recipe.imgSrc}
            condition={recipe.condition}
          />
        })}

      </div>

      {/* 3rd section of the page */}
      <hr className="w-1/5 mx-auto my-10 mt-24 border-gray-300" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 lg:px-0 bg-amber-50">
        <div className="py-8 flex justify-center">
          <div className="rounded-lg overflow-hidden shadow-lg max-w-sm bg-white">
          <div className="flex justify-center pt-8">
              <img src={img_5} alt="Health Providers" className="object-cover w-auto h-30" />
            </div>

            <div className="p-6">
              <h4 className="text-2xl font-semibold text-blue-gray-900 mb-3">
                Instant Health Advice
              </h4>
              <p className="text-lg font-normal text-gray-700">
                Ask questions about nutrition, dietary concerns, or health management, and receive immediate, expert responses to guide your wellness journey.
              </p>
            </div>
          </div>
        </div>

        <div className="py-8 flex justify-center">
          <div className="rounded-lg overflow-hidden shadow-lg max-w-sm bg-white">
          <div className="flex justify-center pt-8">
              <img src={img_6} alt="Health Providers" className="object-cover w-auto h-30" />
            </div>

            <div className="p-6">
              <h4 className="text-2xl font-semibold text-blue-gray-900 mb-3">
                Personalized Recipes
              </h4>
              <p className="text-lg font-normal text-gray-700">
                Discover a diverse array of recipes tailored to address specific health requirements, ensuring you find meals that fit your dietary needs and preferences perfectly.
              </p>
            </div>
          </div>
        </div>

        <div className="py-8 flex justify-center">
          <div className="rounded-lg overflow-hidden shadow-lg max-w-sm bg-white">
            <div className="flex justify-center pt-8">
              <img src={img_7} alt="Health Providers" className="object-cover w-auto h-30" />
            </div>


            <div className="p-6">
              <h4 className="text-2xl font-semibold text-blue-gray-900 mb-3">
                Health Providers
              </h4>
              <p className="text-lg font-normal text-gray-700">
                Easily access a network of healthcare professionals, enabling seamless communication and support for your health concerns and queries.
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>

  );
}

export default HomePage;