import React from 'react'
import img_1 from '../assets/our_team/Sahan.jpg'

function FindDoctor() {
  return (
    <div>
        <div class='mt-16 font-serif flex text-center justify-between font-semibold text-stone-700 text-5xl subpixel-antialiased tracking-normal p-16 ml-96'>
        <p>
        Connect with Trusted <br/> Healthcare Professionals
        </p>
      </div>
        {/* <div class="max-w-sm w-full lg:max-w-full lg:flex mt-36 ml-52">
  <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" title="Woman holding a mug">
  </div>
  <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
    <div class="mb-8">
      <p class="text-sm text-gray-600 flex items-center">
        <svg class="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
        </svg>
        Members only
      </p>
      <div class="text-gray-900 font-bold text-xl mb-2">Can coffee make you a better developer?</div>
      <p class="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
    </div>
    <div class="flex items-center">
      <img class="w-10 h-10 rounded-full mr-4" src="/img/jonathan.jpg" alt="Avatar of Jonathan Reinink"/>
      <div class="text-sm">
        <p class="text-gray-900 leading-none">Jonathan Reinink</p>
        <p class="text-gray-600">Aug 18</p>
      </div>
    </div>
  </div>
</div> */}

<div
  class="h-36 flex flex-col rounded-lg bg-amber-50 text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white md:max-w-1xl md:flex-row mt-2 ml-40 mr-36">
  <img
    class="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:!rounded-none md:!rounded-s-lg"
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxes7NR06YGIhJVT9sFvLIM3Bwno3uqgvahg&s"
    alt="" />
  <div class="flex flex-col justify-start p-6">
    <h5 class="mb-0.5 text-xl font-semibold font-medium">Dr. Edward Dunlop</h5>
    <p class="text-xs text-surface/75 dark:text-neutral-300">
      (Australian Senior Research Biologist)
    </p>
    <p class="mb-2 mt-2 text-base">
      Dr. Edward followed a Ph.D. from the university of Queensland and over 50 published articles. Edward Dunlop at University of Melbourne.
    </p>
    <p class='font-semibold'>Contact: +614 1234 5679</p>
    <p></p>
  </div>
</div>

    </div>
  )
}

export default FindDoctor
