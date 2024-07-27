// import { useParams } from "react-router-dom"
// import axios from "axios"   
// import { useEffect, useState } from "react"
// export default function RecipeView() {
//     const params = useParams()

//     const [loading, setLoading] = useState(false)
//     const [recipe, setRecipe] = useState({})

//     async function getRecipe() {
//         try {
//             setLoading(true)
//             const response = await axios.get('http://localhost:3000/recipe/get/' + params.id)
//             setRecipe(response.data)
//         } catch (error) {
//             console.error(error)
//         } finally {
//             setLoading(false)
//         }
//     }

//     useEffect(() => {
//         getRecipe()
//     }, [params.id])

//     return (
//         <div>
//             <h1>Recipe View</h1>
//             {loading && <p>Loading...</p>}
//             {!loading && (
//                 <div>
//                     <h2>{recipe.title}</h2>
//                     <p>{recipe.description}</p>
//                     <p>Prep Time: {recipe.prepTime}</p>
//                     <p>Serves: {recipe.serves}</p>
//                     <img src={recipe.imgSrc} alt={recipe.title} />
//                 </div>
//             )}
//         </div>
//     )
// }

