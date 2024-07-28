import React from 'react';
import { Link } from 'react-router-dom';

const ArticleCard = ({ id, title, description, content, imgSrc }) => {
    console.log("id", id);
    console.log("title", title);
    console.log("description", description);
    console.log("content", content);
    console.log("imgSrc", imgSrc);

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto mt-12 sm:ml-48">
            <img className="w-full" src={imgSrc} alt={title} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">
                    {description}
                </p>
            </div>
            <Link to={`../Components/`}>
                <button
                    className="w-full sm:w-auto select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none bg-gray-900 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl py-3 px-6 rounded-lg text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                    type="button"
                >
                    VIEW RECIPE
                </button>
            </Link>
        </div>
    );
}

export default ArticleCard;




