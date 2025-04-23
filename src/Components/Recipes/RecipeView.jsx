import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export default function RecipeView() {
  const params = useParams();
  const [loading, setLoading] = useState(false);
  const [recipe, setRecipe] = useState({});

  async function getRecipe() {
    const id = params.id;
    try {
      setLoading(true);
      const response = await axios.get(`https://nutricare-backend.vercel.app/recipe/get/${id}`);
      setRecipe(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getRecipe();
  }, [params.id]);

  return (
    <div className="p-4 sm:p-6 md:p-10">
      <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center mt-8">{recipe.title}</h1>

      <div className="flex justify-center">
        <img
          className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 max-h-96 rounded-lg object-cover object-center mt-6"
          src={recipe.imgSrc}
          alt={recipe.title}
        />
      </div>

      <div className="mt-10 mx-auto w-full sm:w-11/12 md:w-10/12 lg:w-8/12 xl:w-7/12">
        <p className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">Procedure:</p>

        <div className="flex justify-center items-center mb-8">
          <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-full max-w-md rounded-xl p-4">
            <nav className="flex flex-col gap-3 text-base font-medium text-blue-gray-700">
              <div className="p-2">Prep Time: {recipe.prepTime}</div>
              <div className="p-2">Condition: {recipe.condition}</div>
              <div className="p-2">Serves: {recipe.serves}</div>
            </nav>
          </div>
        </div>

        <p className="text-base sm:text-lg md:text-xl text-gray-800">{recipe.recipeContent}</p>
      </div>
    </div>
  );
}
