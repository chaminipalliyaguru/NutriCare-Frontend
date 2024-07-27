import { Link } from "react-router-dom";


function About_us() {
  return (
    <div>
      <div>
        <h1 className='font-bold text-6xl mt-16 ml-48'>ABOUT US</h1>
        <div className=" pl-80 max-w-3xl mx-auto ml-80 mt-0 ">

          <p className=" text-gray-700 mb-6">
            Welcome to NutriCure! We are dedicated to enhancing your health with personalized recipes and valuable resources. Our mission is to empower you with nutritious meals tailored to your specific health needs. Whether you are managing diabetes, hypertension, or other conditions, NutriCure is here to support you.
          </p>
          <h2 className="text-2xl font-semibold mb-3">Why Choose NutriCure?</h2>

          <p className="text-gray-700 mb-6">
            NutriCure stands out with personalized recipes tailored to your
            unique health requirements, ensuring you get the nutrition you
            need. Access expert advice through articles and tips from
            healthcare professionals, enhancing your understanding and
            management of your health. Our AI chatbot is always available
            to answer your health-related questions, providing instant and
            personalized responses. Easily connect with healthcare
            providers to get the support and guidance you need. Join
            NutriCure today and discover how personalized nutrition can
            transform your health journey
          </p>
          <Link to="/our_team">
            <button className="mt-12 bg-yellow-200 text-black font-semibold py-2 px-4 border border-yellow-800 hover:border-transparent rounded">
              Meet Our Developer Team
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About_us;
