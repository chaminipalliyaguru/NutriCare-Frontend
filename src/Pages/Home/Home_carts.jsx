import React from 'react'
import img_2 from "../../assets/Home_img_2.jpg"
import img_3 from "../../assets/Home_img_3.jpg";
import img_4 from "../../assets/Home_img_4.jpg";


function Home_carts() {
  return (
    <div>
      <section id="Projects"
    class="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-44 mt-10 mb-5 mr-36 mt-24">

    {/* <!--   ✅ Product card 1 - Starts Here 👇 --> */}
    <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl ml-64">
        <a href="#">
            <img src={img_2}
                    alt="Product" class="h-80 w-72 object-cover rounded-t-xl" />
            <div class="px-4 py-1 w-72">
                {/* <span class="text-gray-400 mr-3 uppercase text-xs">Brand</span> */}
                <div class="p-2">
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
    </div>
    {/* <!--   🛑 Product card 1 - Ends Here  --> */}

    


    {/* <!--   ✅ Product card 2 - Starts Here 👇 --> */}
    <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl ml-24">
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
    </div>
    {/* <!--   🛑 Product card 2- Ends Here  --> */}

    {/* <!--   ✅ Product card 3 - Starts Here 👇 --> */}

    <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl mr-8">
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
    </div>
    {/* <!--   🛑 Product card 3 - Ends Here  --> */}

</section>
    </div>
  )
}

export default Home_carts
