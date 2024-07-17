import React from 'react'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
// import Our_team from '../Our_team'
// import { useNavigaet, useNavigate } from "react-router-dom";

function About_us() {
    const navigate = useNavigate();
  return (
    <div>
      {/* <Header/> */}
        <div>
        <h1 class="font-bold text-5xl mb-4 mt-28 ml-36 text-lime-500">About Us</h1>
        <p class="ml-36 mr-32 mt-10">
        Welcome to NutriCure! We're dedicated to enhancing your 
health with personalized recipes and valuable resources. Our 
mission is to empower you with nutritious meals tailored to 
your specific health needs. Whether you're managing diabetes, 
hypertension, or other conditions, NutriCure is here to support 
you.
        </p>
        <h2 class="font-bold text-3xl mb-4 mt-12 ml-36 text-blue-gray-400">Why Choose NutriCure?</h2>
        </div>
        <p class="ml-36 mr-32 mt-4">
        NutriCure stands out with personalized recipes tailored to your 
unique health requirements, ensuring you get the nutrition you 
need. Access expert advice through articles and tips from 
healthcare professionals, enhancing your understanding and 
management of your health. Our AI chatbot is always available 
to answer your health-related questions, providing instant and 
personalized responses. Easily connect with healthcare 
providers to get the support and guidance you need. Join 
NutriCure today and discover how personalized nutrition can 
transform your health journey.
        </p>
        <div class = "ml-36 mr-32 mt-4">
        {/* <a href={Our_team} class="inline-flex items-center px-4 py-2 bg-blue-500 border border-transparent rounded-md font-semibold text-white hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-700 active:bg-blue-800">
    <svg class="w-5 h-5 mr-2 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 9.00005L10.2 13.65C11.2667 14.45 12.7333 14.45 13.8 13.65L20 9" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M3 9.17681C3 8.45047 3.39378 7.78123 4.02871 7.42849L11.0287 3.5396C11.6328 3.20402 12.3672 3.20402 12.9713 3.5396L19.9713 7.42849C20.6062 7.78123 21 8.45047 21 9.17681V17C21 18.1046 20.1046 19 19 19H5C3.89543 19 3 18.1046 3 17V9.17681Z" stroke="#000000" stroke-width="2" stroke-linecap="round"></path> </g>
    </svg>
  <span class="inline-block">Our_team <br/></span>
</a> */}
{/* <button onClick={() => navigate("/Frontend/Frontend/src/Pages/Our_story/Our_team")}> Our Team </button> */}

</div>

     
    </div>
  )
}

export default About_us
