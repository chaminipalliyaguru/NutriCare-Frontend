import img_1 from '../../assets/our_team/Chamini Palliyaguru.jpg'

function ArticleCard() {
  return (
    <div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg ml-48 mt-12">
          <img className="w-full" src={img_1} alt="Sunset in the mountains" />
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
  )
}

export default ArticleCard
