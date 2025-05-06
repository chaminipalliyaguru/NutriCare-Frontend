function articleIntro() {
  return (
    <div>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center gap-4 mt-8">
          {/* HEADING */}
          <div className="order-1 sm:order-1 mt-12 sm:mt-0">
            <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center sm:text-left">
              Health <br />
              Advice and
              <br /> Articles
              <br />
              Hub
            </h1>
          </div>

          <div className="text-gray-700 order-2 sm:order-2 mt-8 px-3 sm:px-4 lg:px-5">
            <p className="text-base sm:text-sm md:text-lg lg:text-xl leading-relaxed">
              Explore a comprehensive resource hub dedicated to empowering your
              health journey. Our expertly curated articles and actionable
              advice span various topics, ensuring you have the knowledge and
              tools needed to make informed wellness decisions. From nutrition
              tips and fitness guides to mental health strategies and preventive
              care insights, we provide everything you need to support a
              balanced and healthy lifestyle.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default articleIntro
