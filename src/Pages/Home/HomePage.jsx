import img_1 from "../../assets/Home_img_1.png";
import img_5 from "../../assets/ChatGPT.png";
import img_6 from "../../assets/Food Bar.png";
import img_7 from "../../assets/surgery-img.png";
import Home_carts from "./Home_carts";

function HomePage() {
  return (
    <div>
      {/* 1st section: welcome part */}
      <div className="flex flex-col lg:flex-row items-center justify-between h-auto pt-16 lg:pt-32 px-4 lg:px-40">
        <div className="relative flex bg-clip-border rounded-xl bg-amber-50 text-gray-700 shadow-md w-full lg:max-w-[74rem] flex-col lg:flex-row">
          <div className="relative w-full lg:w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-t-lg lg:rounded-r-none lg:rounded-t-none bg-clip-border shrink-0">
            <img
              src={img_1}
              alt="Meal image"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="p-6">
            <h6 className="block mb-4 font-sans text-base font-semibold leading-relaxed tracking-normal text-gray-700 uppercase">
              Welcome to NutriCare!
            </h6>
            <h4 className="block mb-2 font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900">
              Discover Personalized Health Recipes
            </h4>
            <p className="block mb-8 font-sans text-base font-normal leading-relaxed text-gray-700">
              NutriCare is your ultimate destination for personalized, healthy
              recipes tailored to various health conditions. Our platform
              leverages AI to provide meal recommendations, health tips, and
              resources to help you manage your wellness effectively.
            </p>
            <a href="#" className="inline-block">
              <button
                className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase transition-all rounded-lg hover:bg-gray-900/10 active:bg-gray-900/20"
                type="button"
              >
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </button>
            </a>
          </div>
        </div>
      </div>

      <Home_carts />

      {/* 3rd section of the page */}
      <hr className="w-1/5 mx-auto my-8" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center bg-amber-50 px-4 lg:px-0">
        <div className="py-10">
          <div className="rounded-lg overflow-hidden shadow-lg max-w-sm bg-white">
            <img src={img_5} alt="Meal image" className="object-cover w-auto h-40  ml-24" />
            <div className="p-6">
              <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900">
                Instant Health Advice
              </h4>
              <p className="block mt-3 font-sans text-xl font-normal leading-relaxed text-gray-700">
                Ask questions about nutrition, dietary concerns, or health
                management, and receive immediate, expert responses to guide
                your wellness journey.
              </p>
            </div>
          </div>
        </div>

        <div className="py-10">
          <div className="rounded-lg overflow-hidden shadow-lg max-w-sm bg-white">
            <img src={img_6} alt="Meal image" className="object-cover w-auto h-40 ml-24" />
            <div className="p-6">
              <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900">
                Personalized Recipes
              </h4>
              <p className="block mt-3 font-sans text-xl font-normal leading-relaxed text-gray-700">
                Discover a diverse array of recipes tailored to address specific
                health requirements, ensuring you find meals that fit your
                dietary needs and preferences perfectly.
              </p>
            </div>
          </div>
        </div>

        <div className="py-10">
          <div className="rounded-lg overflow-hidden shadow-lg max-w-sm bg-white">
            <img src={img_7} alt="Meal image" className="object-cover w-auto h-40 ml-24" />
            <div className="p-6">
              <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900">
                Health Providers
              </h4>
              <p className="block mt-3 font-sans text-xl font-normal leading-relaxed text-gray-700">
                Easily access a network of healthcare professionals, enabling
                seamless communication and support for your health concerns and
                queries.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;