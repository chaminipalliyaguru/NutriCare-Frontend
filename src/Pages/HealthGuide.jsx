import { useEffect, useState } from "react";
import axios from "axios";
import ArticleCard from "../Components/articles/articleCard";
import ArticleIntro from "../Components/articles/articleIntro";

function HealthGuide() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function getAll() {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://nutricare-backend.vercel.app/article/get-all"
      );
      setArticles(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getAll();
  }, []);

  return (
    <>
    <ArticleIntro/>
      
       {/* card section */}
      <div className="container mx-auto px-4 mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 place-items-center">
          {loading && (
            <p className="col-span-full text-center text-gray-700">
              Loading...
            </p>
          )}
          {error && (
            <p className="col-span-full text-center text-red-600">
              Error: {error.message}
            </p>
          )}
          {!loading &&
            !error &&
            articles.map((article) => (
              <ArticleCard
                key={article._id}
                id={article._id}
                title={article.title}
                description={article.description}
                content={article.content}
                imgSrc={article.imgSrc}
              />
            ))}
        </div>
      </div>
    </>
  );
}

export default HealthGuide;
