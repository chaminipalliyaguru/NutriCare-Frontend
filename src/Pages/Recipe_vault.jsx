<<<<<<< HEAD
import React from 'react'
=======
import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
>>>>>>> 1241460091b779d0f28c6c458c30d46d527d7b2c
import { Input, Button } from "@material-tailwind/react";
import img_2 from "../assets/Home_img_2.jpg";
import img_3 from "../assets/Home_img_3.jpg";
import img_4 from "../assets/Home_img_4.jpg";

// export function InputWithButton() {
//   const [email, setEmail] = React.useState("");
//   const onChange = ({ target }) => setEmail(target.value);

import axios from 'axios'
import RecipeCard from '../Components/Recipe';

function Recipe_vault() {
  const [recipies, setRecipies] = React.useState([])
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(null)
  
  const [condition, setName] = useState('') 

  async function getAll() {
    try {
      setLoading(true)
      const response = await  axios.get('http://localhost:3000/recipe/get-all')
      setRecipies(response.data)
    } catch (error) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  async function searchRecipe() {
    try {
      setLoading(true);
      const resp = await axios.get('http://localhost:3000/recipe/search/'+condition);
      if (resp.data) setRecipies(resp.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  React.useEffect(() => {
    getAll()
  }, [])

  useEffect(() => {
    searchRecipe()
  },[condition])
    
  return (
    <div>
     

      <div class='mt-24 font-serif flex text-center justify-between font-semibold text-stone-700 text-5xl subpixel-antialiased tracking-normal p-16 ml-96'>
        <p>
        DISCOVER DELICIOUS <br/>
        AND HEALTHY RECIPES
        </p>
      </div>


      <div className="ml-96 relative flex w-full max-w-[50rem] border-4 border-slate-400 rounded-xl">
      <Input placeholder="Search" onChange={(e)=>setName(e.target.value)}/>
      {/* <Button
        size="md"
        // color={email ? "gray" : "blue-gray"}
        // disabled={!email}
        className="!absolute right-1 top-1 rounded"
      >
        Search
      </Button> */}
    </div>
      

      {/* 3rd section */}

      <hr class="w-1/5 mx-auto" />
      <div class="grid grid-cols-3 lg:gap-0 justify-items-center">

        {/* 1st of 2nd section */}
       {!loading && recipies.map((recipe) => {
        return <RecipeCard
          key={recipe._id}
          title={recipe.title}
          description={recipe.description}
          prepTime={recipe.prepTime}
          serves={recipe.serve}
          imgSrc={recipe.imgSrc}
        />
       })}

        {/* 2nd

        <div class="py-20 ml-1.5">
          <div class="rounded-xl overflow-hidden shadow-lg max-w-xs bg-amber-50">
            <img src={img_3} alt="Meal image" class="object-cover w-full" />
            <div class="p-6">
              <h4 class="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                Seared Tuna with Bulgur & Chickpea Salad
              </h4>
              <p class="block mt-3 font-sans text-xl antialiased font-normal leading-relaxed text-gray-700">
                This tuna recipe mixes fresh fish with olive oil, lemon, herbs,
                and chickpeas.
              </p>

              <div class="pt-2">
                <p class="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                  20 min - easy prep - 2 serves
                </p>

                <div class="pl-32">
                  <button
                    class=" select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none bg-gray-900 text-xs py-3 px-6 rounded-lg  text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                    type="button"
                  >
                    VIEW RECIPE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div> */}

      </div>

     
    </div>
  )
}

export default Recipe_vault
