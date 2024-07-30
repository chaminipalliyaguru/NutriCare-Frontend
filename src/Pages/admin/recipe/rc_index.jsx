import RecipeTable from "./rc_list";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaPlus } from "react-icons/fa";
import RecipeForm from "./rc_form";

export default function RecipeAdmin() {
    const [loading, setLoading] = useState(true);
    const [recipes, setRecipes] = useState([]);
    const [error, setError] = useState(null);

    const [condition, setCondition] = useState('');

    const [showForm, setShowForm] = useState(false);
    const [selectedRecipe, setSelectedRecipe] = useState(null);

    async function getAll() {
        try {
            setLoading(true);
            const response = await axios.get('https://nutricarebe-ffhmggb4gefgbwch.eastus-01.azurewebsites.net/recipe/get-all');
            setRecipes(response.data);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }

    async function searchRecipe() {
        try {
            setLoading(true);
            if (condition === '') {
                return getAll();
            } else {
                const resp = await axios.get('https://nutricarebe-ffhmggb4gefgbwch.eastus-01.azurewebsites.net/recipe/search/' + condition);
                if (resp.data) setRecipes(resp.data);
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    async function deleteRecipe(recipe) {
        try {
            setLoading(true);
            if (window.confirm('Are you sure you want to delete this recipe?')) {
                const response = await axios.delete('https://nutricarebe-ffhmggb4gefgbwch.eastus-01.azurewebsites.net/recipe/delete/' + recipe._id);
                console.log(response);
                getAll();
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getAll();
    }, []);

    useEffect(() => {
        searchRecipe();
    }, [condition]);

    useEffect(() => {
        if (showForm) {
            setSelectedRecipe(null);
        }
    }, [showForm]);

    useEffect(() => {
        if (selectedRecipe) {
            setShowForm(true);
            // scroll to top
            window.scrollTo(0, 0);
        }
    }, [selectedRecipe]);

    return (
        <>
            <div className="pt-20 px-12">
                <div className="flex justify-between mb-8">
                    <h2 className="text-3xl">Manage Recipies</h2>
                    <button className="py-2 px-6 bg-blue-gray-900 text-white rounded-md shadow-md flex align-middle" onClick={() => setShowForm(true)}>New Recipe</button>
                </div>
                {loading && <div>Loading...</div>}
                {error && <div>Error: {error.message}</div>}
                {showForm && <RecipeForm recipe={selectedRecipe}  closeForm={() => {
                    setShowForm(false)
                    getAll()
                }} />}
                <div className="my-3 bg-white border-1 shadow-md rounded-md p-4">
                    <input type="text" onChange={e => setCondition(e.target.value)} value={condition} placeholder="Search by condition" className="border-1 border-gray-300 rounded-md p-2" />
                </div>
                {!loading && <RecipeTable recipeList={recipes} selectRecipe={setSelectedRecipe} deleteRecipe={deleteRecipe} />}
            </div>
        </>
    )
}