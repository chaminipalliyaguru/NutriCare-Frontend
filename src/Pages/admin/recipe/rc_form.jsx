import { useState, useEffect } from 'react';
import { IoIosClose } from "react-icons/io";
import axios from 'axios';

export default function RecipeForm({ recipe, closeForm }) {
    const [loading, setLoading] = useState(false);
    const [formRecipe, setFormRecipe] = useState({
        title: '',
        description: '',
        prepTime: '',
        serves: '',
        imgSrc: '',
        condition: '',
        recipeContent: '',
    });
    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (recipe) {
            setFormRecipe(recipe);
        }
    }, [recipe]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormRecipe({
            ...formRecipe,
            [name]: value,
        });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formRecipe.title) newErrors.title = 'Title is required';
        if (!formRecipe.description) newErrors.description = 'Description is required';
        if (!formRecipe.prepTime || formRecipe.prepTime <= 0) newErrors.prepTime = 'Prep Time must be a positive number';
        if (!formRecipe.serves || formRecipe.serves <= 0) newErrors.serves = 'Serves must be a positive number';
        if (!formRecipe.imgSrc) newErrors.imgSrc = 'Image URL is required';
        if (!formRecipe.condition) newErrors.condition = 'Condition is required';
        if (!formRecipe.recipeContent) newErrors.recipeContent = 'Recipe content is required';
        return newErrors;
    };

    const handleSave = () => {
        const newErrors = validateForm();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
        saveRecipe({ ...recipe, ...formRecipe });
    };

    async function saveRecipe(recipe) {
        try {
            setLoading(true);
            let response;
            if (!recipe._id) {
                response = await axios.post('https://nutricarebe-ffhmggb4gefgbwch.eastus-01.azurewebsites.net/recipe/create', formRecipe);
            } else {
                response = await axios.put('https://nutricarebe-ffhmggb4gefgbwch.eastus-01.azurewebsites.net/recipe/update/' + recipe._id, formRecipe);
            }
            console.log(response);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
            closeForm();
        }
    }

    return (
        <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
            <div className="flex justify-between mb-8 align-middle">
                <h2 className="text-2xl font-bold mb-6 text-center">Recipe Form</h2>
                <button className="py-2 px-6 rounded-full shadow-md flex align-middle" onClick={closeForm}><IoIosClose size={40}/></button>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">Title:</label>
                <input
                    type="text"
                    name="title"
                    value={formRecipe.title}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                />
                {errors.title && <p className="text-red-500">{errors.title}</p>}
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">Description:</label>
                <input
                    type="text"
                    name="description"
                    value={formRecipe.description}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                />
                {errors.description && <p className="text-red-500">{errors.description}</p>}
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">Prep Time (minutes):</label>
                <input
                    type="number"
                    name="prepTime"
                    value={formRecipe.prepTime}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                />
                {errors.prepTime && <p className="text-red-500">{errors.prepTime}</p>}
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">Serves:</label>
                <input
                    type="number"
                    name="serves"
                    value={formRecipe.serves}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                />
                {errors.serves && <p className="text-red-500">{errors.serves}</p>}
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">Image URL:</label>
                <input
                    type="text"
                    name="imgSrc"
                    value={formRecipe.imgSrc}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                />
                {errors.imgSrc && <p className="text-red-500">{errors.imgSrc}</p>}
            </div>

            <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2">Condition:</label>
                <input
                    type="text"
                    name="condition"
                    value={formRecipe.condition}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                />
                {errors.condition && <p className="text-red-500">{errors.condition}</p>}
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2">Recipe Content:</label>
                <input
                    type="text"
                    name="recipeContent"
                    value={formRecipe.recipeContent}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                />
                {errors.recipeContent && <p className="text-red-500">{errors.recipeContent}</p>}
            </div>
            <button onClick={handleSave} className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200">
                {loading ? 'Loading...' : 'Save'}
            </button>
        </div>
    );
}
