import img_1 from '../../assets/our_team/Chamini Palliyaguru.jpg'
import img_2 from '../../assets/our_team/Sadhika.jpg'
import img_3 from '../../assets/our_team/Sajani.jpg'
import img_4 from '../../assets/our_team/Sahan.jpg'
import img_5 from '../../assets/our_team/Abishek.jpg'

const Members = [
    {
        id: "1",
        name: "Sahan Madushka",
        position: "Backend Developer",
        image_url: img_4,
    },
    {
        id: "2",
        name: "S. Sajani",
        position: "Frontend Developer",
        image_url: img_3,
    },
    {
        id: "3",
        name: "Chamini Palliyaguru",
        position: "Frontend Developer",
        image_url: img_1,
    },
    {
        id: "4",
        name: "Abishek Haththakage",
        position: "Devops Engineer",
        image_url: img_5,
    },
    {
        id: "5",
        name: "M.S.S. Begam",
        position: "Frontend Developer",
        image_url: img_2,
    },

];

function Our_team(){
    return (
        <section
        id="Projects">
        <div className="text-center p-10">
    <h1 className="font-bold text-6xl mb-4 mt-16">Meet Our Team</h1>
     <p className='mt-6'>Get to know the passionate individuals behind NutriCure, dedicated to bringing you</p> 
     <p>personalized, healthy recipes and valuable health resources.</p>
 </div>
 <section id="Projects"
      className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-44 ml-32 mb-5 mr-54 mt-24">

 {Members.map((member) =>
 <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
      <a href="#">
          <img src={member.image_url}
                  alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
          <div className="px-4 py-3 w-72">
              {/* <span class="text-gray-400 mr-3 uppercase text-xs">Brand</span> */}
              <p className="text-2xl text-center font-bold text-black truncate block capitalize mt-4">{member.name}</p>
                  <p className="text-lg text-center text-black cursor-auto my-2">{member.position}</p>
                
          </div>
      </a>
 </div> 
 
)}
</section>
 </section>
    )
}

export default Our_team;