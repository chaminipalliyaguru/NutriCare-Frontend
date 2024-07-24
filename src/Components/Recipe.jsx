import React from 'react';

const RecipeCard = ({ title, description, prepTime, serves, imgSrc }) => {
    return (
        <div className="py-20 ml-36">
            <div className="rounded-xl overflow-hidden shadow-lg max-w-xs bg-amber-50">
                <img src={imgSrc} alt="Meal image" className="object-cover w-full max-h-52" />
                <div className="p-6">
                    <h4 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        {title}
                    </h4>
                    <p className="block mt-3 font-sans text-xl antialiased font-normal leading-relaxed text-gray-700">
                        {description}
                    </p>

                    <div className="pt-2">
                        <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                            {prepTime} - easy prep - {serves} serves
                        </p>

                        <div className="pl-32">
                            <button
                                className=" select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none bg-gray-900 text-xs py-3 px-6 rounded-lg  text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                                type="button"
                            >
                                VIEW RECIPE
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecipeCard;