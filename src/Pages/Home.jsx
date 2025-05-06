import React, { useState } from "react";
import axios from "axios";
import RecipeCard from "../Components/Recipes/RecipeCard";
import Services from "../Components/Home/services"
import Welcome from "../Components/Home/welcome";

function Home() {
  const [recipies, setRecipies] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  async function getAll() {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://nutricare-backend.vercel.app/recipe/get-all?limit=3"
      );
      setRecipies(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  React.useEffect(() => {
    getAll();
  }, []);

  return (
    <div>
      {/* 1st section: welcome part */}
      <Welcome/>

      {/* 2nd section of the page */}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 place-items-center mt-8 mb-24 px-4 sm:px-6 lg:px-8 ">
        {!loading &&
          recipies.map((recipe) => (
            <div
              key={recipe._id}
              className="transition-transform duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              <RecipeCard
                id={recipe._id}
                title={recipe.title}
                description={recipe.description}
                prepTime={recipe.prepTime}
                serves={recipe.serve}
                imgSrc={recipe.imgSrc}
                condition={recipe.condition}
              />
            </div>
          ))}
      </div>

      {/* 3rd section of the page */}
      <Services/>
    </div>
  );
}

export default Home;
