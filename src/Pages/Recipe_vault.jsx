import React, { useEffect, useState } from 'react'
import { Input, Button } from "@material-tailwind/react";
import axios from 'axios'
import RecipeCard from '../Components/Recipes/RecipeCard';

function Recipe_vault() {
  const [recipies, setRecipies] = React.useState([])
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(null)

  const [condition, setName] = useState('')

  async function getAll() {
    try {
      setLoading(true)
      const response = await axios.get('https://nutricarebe-ffhmggb4gefgbwch.canadacentral-01.azurewebsites.net/recipe/get-all')
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
      const resp = await axios.get('https://nutricarebe-ffhmggb4gefgbwch.canadacentral-01.azurewebsites.net/recipe/search/' + condition);
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
    if(condition=='') getAll();
    searchRecipe()

  }, [condition])

  return (
    <div >

      <div className='mt-24 font-serif flex flex-col items-center text-center font-semibold text-stone-700 text-3xl sm:text-4xl md:text-5xl subpixel-antialiased tracking-normal p-4 sm:p-8 md:p-16'>
        <p>
          DISCOVER DELICIOUS <br />
          AND HEALTHY RECIPES
        </p>
      </div>
      
      <div className="relative flex w-full max-w-[50rem] border border-slate-400 rounded-xl mx-auto">
        <Input 
          placeholder="Search for recipes..." 
          onChange={(e) => setName(e.target.value)} 
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 place-items-center mt-8 mb-24 px-4 sm:px-6 lg:px-8">
  {!loading && recipies.map((recipe) => (
    <RecipeCard
      key={recipe._id}
      id={recipe._id}
      title={recipe.title}
      description={recipe.description}
      prepTime={recipe.prepTime}
      serves={recipe.serve}
      imgSrc={recipe.imgSrc}
    />
  ))}
</div>

    </div>
  )
}
export default Recipe_vault