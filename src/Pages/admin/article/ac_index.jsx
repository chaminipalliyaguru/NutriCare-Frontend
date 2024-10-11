import ArticleTable from "./ac_list";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ArticleForm from "./ac_form";

export default function ArticleAdmin() {
    const [loading, setLoading] = useState(true);
    const [articles, setArticles] = useState([]);
    const [error, setError] = useState(null);

    const [title, setTitle] = useState('');

    const [showForm, setShowForm] = useState(false);
    const [selectedArticle, setSelectedArticle] = useState(null);

    async function getAll() {
        try {
            setLoading(true);
            const response = await axios.get('https://nutricarebe-ffhmggb4gefgbwch.canadacentral-01.azurewebsites.net/article/get-all');
            setArticles(response.data);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }

    async function searchArticle() {
        try {
            setLoading(true);
            if (title === '') {
                return getAll();
            } else {
                const resp = await axios.get('https://nutricarebe-ffhmggb4gefgbwch.canadacentral-01.azurewebsites.net/article/search/' + title);
                if (resp.data) setArticles(resp.data); // Corrected here
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    async function deleteArticle(article) {
        try {
            setLoading(true);
            if (window.confirm('Are you sure you want to delete this Article?')) {
                const response = await axios.delete('https://nutricarebe-ffhmggb4gefgbwch.canadacentral-01.azurewebsites.net/article/delete/' + article._id);
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
        searchArticle();
    }, [title]);

    useEffect(() => {
        if (showForm) {
            setSelectedArticle(null);
        }
    }, [showForm]);

    useEffect(() => {
        if (selectedArticle) {
            setShowForm(true);
            // scroll to top
            window.scrollTo(0, 0);
        }
    }, [selectedArticle]);

    return (
        <>
            <div className="pt-20 px-12">
                <div className="flex justify-between mb-8">
                    <h2 className="text-3xl">Manage Article</h2>
                    <button className="py-2 px-6 bg-blue-gray-900 text-white rounded-md shadow-md flex align-middle" onClick={() => setShowForm(true)}>New Article</button>
                </div>
                {loading && <div>Loading...</div>}
                {error && <div>Error: {error.message}</div>}
                {showForm && <ArticleForm article={selectedArticle} closeForm={() => {
                    setShowForm(false)
                    getAll()
                }} />}
                <div className="my-3 bg-white border-1 shadow-md rounded-md p-4">
                    <input type="text" onChange={e => setTitle(e.target.value)} value={title} placeholder="Search by Title" className="border-1 border-gray-300 rounded-md p-2" />
                </div>
                {!loading && <ArticleTable articleList={articles} selectArticle={setSelectedArticle} deleteArticle={deleteArticle} />}
            </div>
        </>
    )
}