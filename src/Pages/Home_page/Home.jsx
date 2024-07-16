import React from "react";
import img_1 from "../assets/Home_img_1.png";
import img_5 from "../assets/ChatGPT.png";
import img_6 from "../assets/Food Bar.png";
import img_7 from "../assets/surgery-img.png";
import Home_card from "./Home_card";

function Home_page() {
  return (
    <div>
      
      {/* 1st section: welcome part */}
      <div className="flex items-center justify-between h-50 pt-32 pl-40">
        <div class="relative flex bg-clip-border rounded-xl bg-amber-50 text-gray-700 shadow-md w-full max-w-[74rem] flex-row ">

          <div class="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0">
            <img
              src={img_1}
              alt="Meal image"
              class="object-cover w-full h-full"
            />
          </div>
          <div class="p-6">
            <h6 class="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-700 uppercase">
              Welcome to NutriCare !
            </h6>
            <h4 class="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              Discover Personalized Health Recipes
            </h4>
            <p class="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
              NutriCare is your ultimate destination for personalized, healthy
              recipes tailored to various health conditions. Our platform
              leverages AI to provide meal recommendations, health tips, and
              resources to help you manage your wellness effectively.
            </p>
            <a href="#" class="inline-block">
              <button
                class="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
                type="button"
              >
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  class="w-4 h-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  ></path>
                </svg>
              </button>
            </a>
          </div>
        </div>
      </div>

      
{/* <section id="Projects"
    class="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-44 mt-10 mb-5 mr-36 mt-24"> */}

    {/* <!--   ✅ Product card 1 - Starts Here 👇 --> */}
    {/* <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
        <a href="#">
            <img src={img_2}
                    alt="Product" class="h-80 w-72 object-cover rounded-t-xl" />
            <div class="px-4 py-1 w-72"> */}
                {/* <span class="text-gray-400 mr-3 uppercase text-xs">Brand</span> */}
                {/* <div class="p-2">
              <h4 class="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                Shrimp Lettuce Wraps
              </h4>
              <p class="block mt-3 font-sans text-xl antialiased font-normal leading-relaxed text-gray-700">
                Enjoy these shrimp lettuce wraps filled with crisp veggies and
                juicy shrimp sautéed with garlic and soy sauce. Add sesame seeds
                and lime.
              </p>

              <div class="pt-8">
                <p class="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                  10 Min - easy prep - 2 serves
                </p>

                <div class="pl-24">
                  <button
                    class=" select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none bg-amber-50 text-xs py-3 px-6 rounded-lg  text-black shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                    type="button"
                  >
                    VIEW RECIPE
                  </button>
                </div>
              </div>
              </div>
            </div>
        </a>
    </div> */}
    {/* <!--   🛑 Product card 1 - Ends Here  --> */}

    


    {/* <!--   ✅ Product card 2 - Starts Here 👇 --> */}
    {/* <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
        <a href="#">
            <img src={img_3}
                    alt="Product" class="h-80 w-72 object-cover rounded-t-xl" />
            <div class="px-4 py-3 w-72">
            <h4 class="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            Seared Tuna with Bulgur & Chickpea Salad
              </h4>
              <p class="block mt-3 font-sans text-xl antialiased font-normal leading-relaxed text-gray-700">
              This tuna recipe mixes fresh fish with olive oil, lemon, herbs, and chickpeas, creating a delicious blend of Mediterranean flavors that's both healthy and satisfying.
              </p>
              <div class="pt-6">
                <p class="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                20 min - easy prep - 2 serves
                </p>

                <div class="pl-24">
                  <button
                    class=" select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none bg-amber-50 text-xs py-3 px-6 rounded-lg  text-black shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                    type="button">
                    VIEW RECIPE
                  </button>
                </div>
              </div>
            </div>
        </a>
    </div> */}
    {/* <!--   🛑 Product card 2- Ends Here  --> */}

    {/* <!--   ✅ Product card 3 - Starts Here 👇 --> */}

    {/* <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
        <a href="#">
            <img src={img_4}
                    alt="Product" class="h-80 w-72 object-cover rounded-t-xl" />
            <div class="px-4 py-3 w-72">
            <h4 class="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            Lemon-Herb Salmon with Caponata & Farro
              </h4>
              <p class="block mt-3 font-sans text-xl antialiased font-normal leading-relaxed text-gray-700">
              Mediterranean dinner with farm-fresh veggies, paired perfectly with brown rice and red wine, creates a harmonious blend of flavors for a delightful evening.              </p>
              <div class="pt-6">
                <p class="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                20 min - easy prep - 2 serves
                </p>

                <div class="pl-24">
                  <button
                    class=" select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none bg-amber-50 text-xs py-3 px-6 rounded-lg  text-black shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                    type="button">
                    VIEW RECIPE
                  </button>
                </div>
              </div>
            </div>
        </a>
    </div> */}
    {/* <!--   🛑 Product card 3 - Ends Here  --> */}

{/* </section> */}
<Home_card/>

      {/* 3rd section of the page */}
      {/* 1 box */}

      <hr class="w-1/5 mx-auto " />
      <div class="grid grid-cols-3 lg:gap-0 justify-items-center bg-amber-50">
        <div class="py-20 ml-36">
          <div class="rounded-xl overflow-hidden shadow-lg max-w-sm bg-white">
            <img
              src={img_5}
              alt="Meal image"
              class="object-cover w-1/2 ml-20"
            />
            <div class="p-6">
              <h4 class="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                Instant Health Advice
              </h4>
              <p class="block mt-3 font-sans text-xl antialiased font-normal leading-relaxed text-gray-700">
                Ask questions about nutrition, dietary concerns, or health
                management, and receive immediate, expert responses to guide
                your wellness journey.
              </p>
            </div>
          </div>
        </div>

        {/* 2 box */}

        <div class="py-20 ml-1.5">
          <div class="rounded-xl overflow-hidden shadow-lg max-w-sm bg-amber-50 ">
            <div class="p-6 bg-white">
              <img
                src={img_6}
                alt="Meal image"
                class="object-cover w-1/2 ml-20"
              />
              <h4 class="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 mt-3">
                Personalized Recipes
              </h4>
              <p class="block mt-3 font-sans text-xl antialiased font-normal leading-relaxed text-gray-700">
                Discover a diverse array of recipes tailored to address specific
                health requirements, ensuring you find meals that fit your
                dietary needs and preferences perfectly.
              </p>
            </div>
          </div>
        </div>

        {/* 3 box */}

        <div class="py-20 mr-36">
          <div class="rounded-xl overflow-hidden shadow-lg max-w-sm bg-amber-50 ">
            <div class="p-6 bg-white">
              <img
                src={img_7}
                alt="Meal image"
                class="object-cover w-1/2 ml-20"
              />

              <h4 class="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 mt-7">
                Health Providers
              </h4>
              <p class="block mt-3 font-sans text-xl antialiased font-normal leading-relaxed text-gray-700">
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

export default Home_page;
