import React from 'react'
import img_1 from '../../assets/our_team/Chamini Palliyaguru.jpg'
import img_2 from '../../assets/our_team/Sadhika.jpg'
import img_3 from '../../assets/our_team/Sajani.jpg'
import img_4 from '../../assets/our_team/Sahan.jpg'

function Our_team() {
  return (
    <div>
<div className="text-center p-10">
    {/* <h1 class="font-bold text-4xl mb-4">Responsive Product card grid</h1> */}
    <h1 className="font-bold text-6xl mb-4 mt-16">Meet Our Team</h1>
    <p className='mt-6'>Get to know the passionate individuals behind NutriCure, dedicated to bringing you</p> 
    <p>personalized, healthy recipes and valuable health resources.</p>
</div>

{/* <!-- ✅ Grid Section - Starts Here 👇 --> */}
<section id="Projects"
    className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">

    {/* <!--   ✅ Product card 1 - Starts Here 👇 --> */}
    <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
        <a href="#">
            <img src={img_4}
                    alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
            <div className="px-4 py-3 w-72">
                {/* <span class="text-gray-400 mr-3 uppercase text-xs">Brand</span> */}
                <p className="text-2xl text-center font-bold text-black truncate block capitalize mt-4">Sahan Madushka</p>
                    <p className="text-lg text-center text-black cursor-auto my-2">Back-End Developer</p>
                    {/* <del>
                        <p class="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                    </del>
                    <div class="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                            fill="currentColor" class="bi bi-bag-plus" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                            <path
                                d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                        </svg></div> */}
            </div>
        </a>
    </div>
    {/* <!--   🛑 Product card 1 - Ends Here  --> */}

    {/* <!--   ✅ Product card 2 - Starts Here 👇 --> */}
    <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
        <a href="#">
            <img src={img_3}
                    alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
            <div className="px-4 py-3 w-72">
            <p className="text-2xl text-center font-bold text-black truncate block capitalize mt-4">S. Sajani</p>
            <p className="text-lg text-center text-black cursor-auto my-2">Back-End Developer</p>
            </div>
        </a>
    </div>
    {/* <!--   🛑 Product card 2- Ends Here  --> */}

    {/* <!--   ✅ Product card 3 - Starts Here 👇 --> */}

    <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
        <a href="#">
            <img src={img_1}
                    alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
            <div className="px-4 py-3 w-72">
            <p className="text-2xl text-center font-bold text-black truncate block capitalize mt-4">Chamini Palliyaguru</p>
            <p className="text-lg text-center text-black cursor-auto my-2">Front-End Developer</p>
            </div>
        </a>
    </div>
    {/* <!--   🛑 Product card 3 - Ends Here  --> */}

</section>


<section id="Projects"
    className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">

    {/* <!--   ✅ Product card 4 - Starts Here 👇 --> */}
    <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
        <a href="#">
            {/* <img src={img_1}
                    alt="Product" className="h-80 w-72 object-cover rounded-t-xl" /> */}
            <div className="px-4 py-3 w-72">
            <p className="text-2xl text-center font-bold text-black truncate block capitalize mt-4">Abishek Haththakage</p>
            <p className="text-lg text-center text-black cursor-auto my-2">Devops Engineer</p>
            </div>
        </a>
    </div>
    {/* <!--   🛑 Product card 4 - Ends Here  --> */}

    {/* <!--   ✅ Product card 5 - Starts Here 👇 --> */}
    <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
        <a href="#">
            <img src={img_2}
                    alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
            <div className="px-4 py-3 w-72">
            <p className="text-2xl text-center font-bold text-black truncate block capitalize mt-4">M. S. S. Begam</p>
            <p className="text-lg text-center text-black cursor-auto my-2">Front-End Developer</p>
            </div>
        </a>
    </div>
    {/* <!--🛑 Product card 5 - Ends Here --> */}

</section>

    </div>
  )
}

export default Our_team
