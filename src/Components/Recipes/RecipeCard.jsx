import { Link } from 'react-router-dom';


const RecipeCard = ({ id, title, description, prepTime, serves, imgSrc,condition }) => {
    console.log("id", id);
    return (
<div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl rounded overflow-hidden shadow-lg mx-4 sm:mx-auto mt-12">
    <div className="rounded-xl overflow-hidden shadow-lg max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl bg-amber-50">
        <img src={imgSrc} alt="Meal image" className="object-cover w-full h-40 sm:h-48 md:h-56 lg:h-64 xl:h-65" />
        <div className="px-4 py-4 sm:px-6 sm:py-6 md:px-8 md:py-8 lg:px-10 lg:py-10">
            <h4 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl mb-2 text-blue-gray-900">
                {title}
            </h4>
            <p className="text-gray-700 text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl h-48">
                {description}
            </p>
            <div className="pt-2">
                <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-inherit">
                    {prepTime}min - easy prep - {serves} serves
                </p>
                <div className="mt-4">
                    <Link to={`../Components/Recipes/RecipeView/${id}`}>
                        <button
                            className="w-full select-none font-sans font-bold text-center uppercase transition-all bg-gray-900 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl py-2 sm:py-3 px-4 sm:px-6 rounded-lg text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-85 focus:shadow-none active:opacity-85 active:shadow-none"
                            type="button"
                        >
                            VIEW RECIPE
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
</div>

        // </div>
    );
};

export default RecipeCard;