// import { useParams } from "react-router-dom";
// import axios from "axios";
// import { useEffect, useState } from "react";

// export default function ArticleView() {
//     const params = useParams();

//     const [loading, setLoading] = useState(false);
//     const [article, setArticle] = useState({});

//     function getArticle() {
//         const id = params.id;
//         console.log("id", id);
//         try {
//             setLoading(true);
//             const response = axios.get(`https://nutricarebe-ffhmggb4gefgbwch.eastus-01.azurewebsites.net/article/get/${id}`)
//             .then((res) => {
//                 console.log(res.data);
//                 setArticle(res.data);
//             })
//         } catch (error) {
//             console.error(error);
//         } finally {
//             setLoading(false);
//         }
//     }

//     useEffect(() => {
//         getArticle();
//     }, [params.id]);

//     if (loading) {
//         return <div>Loading...</div>;
//     }

//     return (
//         <div>
//             <div>
//                 <h1 className='text-center mt-14 text-6xl mr-20  font-semibold text-gray-900'>
//                     {article.title}
//                 </h1>
//                 </div>
//                 <div className='mt-8 max-w-8xl rounded-lg object-cover object-center ml-20 mr-8'>
                
//                     <img src={article.imgSrc} alt={article.title}/>
//                 </div>
            
//             <div className='ml-20 mr-20 mt-10 text-gray-900 text-xl'>
//                 <p className='mb-6 mt-5'>{article.content}</p>
//             </div>
           
//         </div>
//     );

// }

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
            const response = await axios.get(`https://nutricarebe-ffhmggb4gefgbwch.eastus-01.azurewebsites.net/article/get/${id}`);
            console.log(response.data);
            setArticle(response.data);
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
                <h1 className='text-center mt-14 text-6xl mr-20 font-semibold text-gray-900'>
                    {article.title}
                </h1>
            </div>
            <div className='mt-8 max-w-8xl rounded-lg object-cover object-center ml-20 mr-8'>
                <img src={article.imgSrc} alt={article.title} style={{ height: '400px', width: '1350px'}} />
            </div>
            <div className='ml-20 mr-20 mt-10 text-gray-900 text-xl tracking-wide'>
                <p className='mb-20 mt-5'>{article.content}</p>
            </div>
        </div>
    );
}
