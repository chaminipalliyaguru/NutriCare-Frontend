import chatgptIcon from "../../../public/ChatGPT.png";
import FoodBar from "../../../public/Food Bar.png";
import surgery from "../../../public/surgery-img.png";

function services() {
  return (
    <div>
       <hr className="w-1/5 mx-auto my-10 mt-24 border-gray-300" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 lg:px-0 bg-amber-50">
              <div className="py-8 flex justify-center">
                <div className="rounded-lg overflow-hidden shadow-lg max-w-sm bg-white">
                  <div className="flex justify-center pt-8">
                    <img
                      src={chatgptIcon}
                      alt="Health Providers"
                      className="object-cover w-auto h-30"
                    />
                  </div>
      
                  <div className="p-6">
                    <h4 className="text-2xl font-semibold text-blue-gray-900 mb-3">
                      Instant Health Advice
                    </h4>
                    <p className="text-lg font-normal text-gray-700">
                      Ask questions about nutrition, dietary concerns, or health
                      management, and receive immediate, expert responses to guide
                      your wellness journey.
                    </p>
                  </div>
                </div>
              </div>
      
              <div className="py-8 flex justify-center">
                <div className="rounded-lg overflow-hidden shadow-lg max-w-sm bg-white">
                  <div className="flex justify-center pt-8">
                    <img
                      src={FoodBar}
                      alt="Health Providers"
                      className="object-cover w-auto h-30"
                    />
                  </div>
      
                  <div className="p-6">
                    <h4 className="text-2xl font-semibold text-blue-gray-900 mb-3">
                      Personalized Recipes
                    </h4>
                    <p className="text-lg font-normal text-gray-700">
                      Discover a diverse array of recipes tailored to address specific
                      health requirements, ensuring you find meals that fit your
                      dietary needs and preferences perfectly.
                    </p>
                  </div>
                </div>
              </div>
      
              <div className="py-8 flex justify-center">
                <div className="rounded-lg overflow-hidden shadow-lg max-w-sm bg-white">
                  <div className="flex justify-center pt-8">
                    <img
                      src={surgery}
                      alt="Health Providers"
                      className="object-cover w-auto h-30"
                    />
                  </div>
      
                  <div className="p-6">
                    <h4 className="text-2xl font-semibold text-blue-gray-900 mb-3">
                      Health Providers
                    </h4>
                    <p className="text-lg font-normal text-gray-700">
                      Easily access a network of healthcare professionals, enabling
                      seamless communication and support for your health concerns and
                      queries.
                    </p>
                  </div>
                </div>
              </div>
            </div>
    </div>
  )
}

export default services
