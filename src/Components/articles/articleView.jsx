import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export default function ArticleView() {
    const params = useParams();

    const [loading, setLoading] = useState(false);
    const [article, setArticle] = useState({});

    async function getArticle() {
        const id = params.id;
        console.log("id", id);
        try {
            setLoading(true);
            const response = axios.get(`https://nutricarebe-ffhmggb4gefgbwch.eastus-01.azurewebsites.net/article/get/${id}`)
                .then((res) => {
                    console.log(res.data);
                    setArticle(res.data);
                })
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getArticle();
    }, [params.id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-center mt-14 text-4xl sm:text-5xl md:text-6xl font-semibold text-gray-900">
                    {article.title}
                </h1>
                <div className="mt-8 flex justify-center">
                    <img
                        src={article.imgSrc}
                        alt={article.title}
                        className="w-full max-w-full sm:max-w-lg lg:max-w-3xl rounded-lg shadow-lg"
                    />
                </div>
                <div className="mt-8 mx-auto max-w-full sm:max-w-2xl lg:max-w-3xl text-gray-900">
                    <p className="text-base sm:text-lg md:text-xl leading-relaxed">
                        {article.content}
                    </p>
                </div>
            </div>
        </div>

    );
}