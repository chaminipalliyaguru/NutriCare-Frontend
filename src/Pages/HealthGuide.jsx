
import React from 'react'
import { Link } from "react-router-dom";
import img_1 from '../assets/our_team/Chamini Palliyaguru.jpg';


const HealthGuide = () => {
  return (
    <>
    <div>
    <div className='container'>
        <div className='grid grid-cols-1 sm:grid-cols-2 place-items-center'>
          {/* HEADING*/}
          <div className='order-1 sm:order-1 mt-20 sm:mt-0'>
            <h1 className='font-bold  mt-32 ml-14 text-6xl'>
            Health <br/>
Advice and<br/> Articles<br/>
Hub
            </h1>
          </div>
          
          <div className='text-gray-700 order-2 sm:order-2 mt-8'>
           <p>Explore a comprehensive resource hub dedicated to empowering your health journey. Our expertly curated articles and actionable advice span various topics, ensuring you have the knowledge and tools needed to make informed wellness decisions. From nutrition tips and fitness guides to mental health strategies and preventive care insights, we provide everything you need to support a balanced and healthy lifestyle.
</p>

          </div>

        </div>
      </div>
      
      {/*cards*/}

      <div className="max-w-sm rounded overflow-hidden shadow-lg ml-48 mt-12">
  <img className="w-full" src={img_1} alt="Sunset in the mountains"/>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">Understanding Diabetes:
    </div>
    <p className="text-gray-700 text-base">
    Manage diabetes with smart nutrition and lifestyle
changes. Get tips on meal planning, exercise, and
monitoring blood sugar levels.    </p>
  </div>
  <button
                    className=" select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none bg-gray-900 text-xs py-3 px-6 rounded-lg  text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none ml-52"
                    type="button"
                  >
                    VIEW RECIPE
                  </button>
  <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  </div>
  
</div>
    
      </div>
    </>
  )
}

export default HealthGuide