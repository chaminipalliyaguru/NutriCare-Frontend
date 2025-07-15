import img_1 from "../../../public/Home_img_1.png";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div className="px-4 py-8 lg:py-20 lg:px-40">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-6 bg-amber-50 shadow-md rounded-xl overflow-hidden">
        {/* Image Section */}
        <div className="w-full lg:w-2/5">
          <img
            src={img_1}
            alt="Healthy meal"
            className="w-full h-full object-cover rounded-t-xl lg:rounded-tr-none lg:rounded-l-xl"
          />
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-3/5 p-6 text-gray-700">
          <h6 className="mb-2 text-sm font-semibold uppercase tracking-wide">
            Welcome to NutriCare!
          </h6>
          <h2 className="mb-4 text-2xl lg:text-3xl font-bold text-blue-gray-900">
            Discover Personalized Health Recipes
          </h2>
          <p className="mb-6 text-base leading-relaxed">
            NutriCare is your ultimate destination for personalized, healthy recipes
            tailored to various health conditions. Our platform leverages AI to provide
            meal recommendations, health tips, and wellness resources.
          </p>

          <Link to="/recipe_vault">
            <button
              type="button"
              className="flex items-center gap-2 px-6 py-3 text-sm font-semibold uppercase text-white bg-green-500 rounded-lg hover:bg-green-700 transition"
            >
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </button>

          </Link>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
