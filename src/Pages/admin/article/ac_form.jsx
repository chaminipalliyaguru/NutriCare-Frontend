import { useState, useEffect } from 'react';
import { IoIosClose } from "react-icons/io";
import axios from 'axios';

export default function ArticleForm({ article, closeForm }) {
    const [loading, setLoading] = useState(false);
    const [formArticle, setFormArticle] = useState({
        title: '',
        description: '',
        content: '',
        imgSrc: '',
    });

    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (article) {
            setFormArticle(article);
        }
    }, [article]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormArticle({
            ...formArticle,
            [name]: value,
        });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formArticle.title) newErrors.title = 'Title is required';
        if (!formArticle.description) newErrors.description = 'Description is required';
        if (!formArticle.content) newErrors.content = 'Content is required';
        if (!formArticle.imgSrc) newErrors.imgSrc = 'Image URL is required';
        return newErrors;
    };

    const handleSave = () => {
        const newErrors = validateForm();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
        saveArticle({ ...article, ...formArticle });
    };

    async function saveArticle(article) {
        try {
            setLoading(true);
            let response;
            if (!article._id) {
                response = await axios.post('https://nutricarebe-ffhmggb4gefgbwch.canadacentral-01.azurewebsites.net/article/create', formArticle);
            } else {
                response = await axios.put('https://nutricarebe-ffhmggb4gefgbwch.canadacentral-01.azurewebsites.net/article/update/' + article._id, formArticle);
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
                <h2 className="text-2xl font-bold mb-6 text-center">Article Form</h2>
                <button className="py-2 px-6 rounded-full shadow-md flex align-middle" onClick={closeForm}><IoIosClose size={40}/></button>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">Title:</label>
                <input
                    type="text"
                    name="title"
                    value={formArticle.title}
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
                    value={formArticle.description}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                />
                {errors.description && <p className="text-red-500">{errors.description}</p>}
            </div>
            
            <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">Content:</label>
                <textarea
                    name="content"
                    value={formArticle.content}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                />
                {errors.content && <p className="text-red-500">{errors.content}</p>}
            </div>
            
            <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">Image URL:</label>
                <input
                    type="text"
                    name="imgSrc"
                    value={formArticle.imgSrc}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                />
                {errors.imgSrc && <p className="text-red-500">{errors.imgSrc}</p>}
            </div>
            
            <button onClick={handleSave} className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200">
                {loading ? 'Loading...' : 'Save'}
            </button>
        </div>
    );
}