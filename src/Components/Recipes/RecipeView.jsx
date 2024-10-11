import { useParams } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react"

export default function RecipeView() {
    const params = useParams()

    const [loading, setLoading] = useState(false)
    const [recipe, setRecipe] = useState({})

    function getRecipe() {
        const id = params.id;
        console.log("id", id);
        try {
            setLoading(true)
            const response = axios.get(`https://nutricarebe-ffhmggb4gefgbwch.canadacentral-01.azurewebsites.net/recipe/get/${id}`)
                .then((res) => {
                    console.log(res.data);
                    setRecipe(res.data);
                })
            // setRecipe(response.data)
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getRecipe()
    }, [params.id])

    return (
        <div>

            <h1 className="font-bold text-6xl text-center mt-8">{recipe.title}</h1>

            <img
                className="w-full max-w-full sm:w-3/4 md:w-2/3 lg:w-5/6 max-h-96 rounded-lg object-cover object-center ml-4 sm:ml-8 md:ml-12 lg:ml-36 mt-4 sm:mt-8 md:mt-12"
                src={recipe.imgSrc}
                alt={recipe.title}
            />


            <div className="ml-36 mr-36">

                <p className="mt-8 mb-8 text-3xl font-semibold">Procedure: </p>

                <div className="flex justify-center items-center mt-2 mb-8">
                    <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
                        <nav className="flex min-w-[240px] flex-col gap-1 p-2 font-sans text-base font-normal text-blue-gray-700">
                            <div className="flex items-center w-full p-3 leading-tight text-center">
                                Prep Time: {recipe.prepTime}
                            </div>
                            <div className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start">
                                Condition: {recipe.condition}
                            </div>
                            <div className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start">
                                Serves: {recipe.serves}
                            </div>
                        </nav>
                    </div>
                </div>

                <p>{recipe.recipeContent}</p>

            </div>



        </div>


    )
}
