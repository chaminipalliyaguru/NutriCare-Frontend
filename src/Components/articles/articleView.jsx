import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export default function ArticleView() {
    const params = useParams();

    const [loading, setLoading] = useState(false);
    const [article, setArticle] = useState({});

    function getArticle() {
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
        <div>
            <div>
                <h1 className='text-center mt-14 text-6xl mr-20  font-semibold text-gray-900'>
                    {article.title}
                </h1>
                <div className='mr-44'>
                    <img src={article.imgSrc} alt={article.title} className='ml-20 w-full' />
                </div>
            </div>
            <div className='ml-20 text-xs mr-20 text-gray-900'>
                <p className='mb-6 mt-5'>{article.content}</p>
            </div>
        </div>
    );

}