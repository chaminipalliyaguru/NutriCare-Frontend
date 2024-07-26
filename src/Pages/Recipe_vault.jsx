import React, { useEffect, useState } from 'react'
import { Input, Button } from "@material-tailwind/react";
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
      const response = await axios.get('http://localhost:3000/recipe/get-all')
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
      const resp = await axios.get('http://localhost:3000/recipe/search/' + condition);
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
  }, [condition])

  return (
    <div>


      <div className='mt-24 font-serif flex text-center justify-between font-semibold text-stone-700 text-5xl subpixel-antialiased tracking-normal p-16 ml-96'>
        <p>
          DISCOVER DELICIOUS <br />
          AND HEALTHY RECIPES
        </p>
      </div>


      <div className="ml-96 relative flex w-full max-w-[50rem] border-4 border-slate-400 rounded-xl">
        <Input placeholder="Search" onChange={(e) => setName(e.target.value)} />
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

      {/* <hr class="w-1/5 mx-auto" /> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 place-items-center">
      {/* <div class="grid grid-cols-3 lg:gap-0 justify-items-center"> */}

        {/* 1st of 2nd section */}
        {!loading && recipies.map((recipe) => {
          return <RecipeCard
            key={recipe._id}
            id={recipe._id}
            title={recipe.title}
            description={recipe.description}
            prepTime={recipe.prepTime}
            serves={recipe.serve}
            imgSrc={recipe.imgSrc}
          />
        })}



      </div>


    </div>
  )
}

export default Recipe_vault
