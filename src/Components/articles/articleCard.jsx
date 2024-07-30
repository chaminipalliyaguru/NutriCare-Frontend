import React from 'react';
import { Link } from 'react-router-dom';

const ArticleCard = ({ id, title, description, content, imgSrc }) => {
    console.log("id", id);
    console.log("title", title);

    return (
        <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl rounded overflow-hidden shadow-lg mx-4 sm:mx-auto mt-12">
            <img className="w-full h-48 object-cover" src={imgSrc} alt={title} />
            <div className="px-4 py-4 sm:px-6 sm:py-6">
                <div className="font-bold text-lg sm:text-xl md:text-2xl mb-2">{title}</div>
                <p className="text-gray-700 text-lg sm:text-base md:text-lg">
                    {description}
                </p>
            </div>
            <div className="px-4 sm:px-6 pb-4">
                <Link to={`../Components/articles/articleView/${id}`}>
                    <button
                        className="w-full select-none font-sans font-bold text-center uppercase transition-all bg-gray-900 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl py-2 sm:py-3 px-4 sm:px-6 rounded-lg text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-85 focus:shadow-none active:opacity-85 active:shadow-none"
                        type="button"
                    >
                        READ MORE
                    </button>
                </Link>
            </div>
        </div>

    );
}

export default ArticleCard;




