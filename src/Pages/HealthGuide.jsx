import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ArticleCard from '../Components/articles/articleCard'

function HealthGuide() {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  async function getAll() {
    try {
      setLoading(true)
      const response = await axios.get('http://localhost:3000/article/get-all')
      setArticles(response.data)
    } catch (error) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getAll()
  }, [])

  return (
    <>
      <div>
        <div className='container'>
          <div className='grid grid-cols-1 sm:grid-cols-2 place-items-center'>
            {/* HEADING*/}
            <div className='order-1 sm:order-1 mt-20 sm:mt-0'>
              <h1 className='font-bold mt-32 ml-14 text-6xl'>
                Health <br />
                Advice and<br /> Articles<br />
                Hub
              </h1>
            </div>

            <div className='text-gray-700 order-2 sm:order-2 mt-8'>
              <p>Explore a comprehensive resource hub dedicated to empowering your health journey. Our expertly curated articles and actionable advice span various topics, ensuring you have the knowledge and tools needed to make informed wellness decisions. From nutrition tips and fitness guides to mental health strategies and preventive care insights, we provide everything you need to support a balanced and healthy lifestyle.
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 place-items-center mt-8">
          {loading && <p>Loading...</p>}
          {error && <p>Error: {error.message}</p>}
          {!loading && !error && articles.map((article) => {
            return (
              <ArticleCard
                key={article._id}
                id={article._id}
                title={article.title}
                description={article.description}
                content={article.content}
                imgSrc={article.imgSrc}
              />
            )
          })}
        </div>
      </div>
    </>
  )
}

export default HealthGuide