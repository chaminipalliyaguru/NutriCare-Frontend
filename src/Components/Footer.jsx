// import React from "react";
// import Logo from "../assets/Logo1.png";
// import { Link } from "react-router-dom";
// import { FaFacebookSquare, FaInstagram, FaYoutube} from "react-icons/fa";


// function Footer() {
//   return (
//     <div class="p-8 pt-32 pl-40">
//       <footer class="w-11/12 p-5 bg-gray-800 bg-clip-border rounded-xl ">
//         <div class="gap-y-6 gap-x-12 md:justify-between  flex flex-row flex-wrap items-center justify-center text-center">
//         <Link to="/">
//           <img src={Logo} alt="logo" className="Logo max-w-60" />
//         </Link>
//           <ul class="flex flex-wrap items-center gap-y-2 gap-x-8">
//             <li>
//               <Link to="/recipe_vault"
//                 class="block font-sans text-base antialiased font-normal leading-relaxed transition-colors text-white hover:text-yellow-600 focus:text-yellow-500 text-xs"
//               >
//                 RECIPE VAULT
                
//               </Link>
//             </li>
//             <li>
//               <Link to="/assistant"
//                 class="block font-sans text-base antialiased font-normal leading-relaxed transition-colors text-white hover:text-yellow-600 focus:text-yellow-500 text-xs"
//               >
//                 VIRTUAL ASSISTANT
//               </Link>
//             </li>
//             <li>
//               <Link to="/HealthGuide"
//                 class="block font-sans text-base antialiased font-normal leading-relaxed transition-colors text-white hover:text-yellow-600 focus:text-yellow-500 text-xs"
//               >
//                 HEALTH GUIDE
//               </Link>
//             </li>
//             <li>
//               <Link to="/findDoctor"
//                 class="block font-sans text-base antialiased font-normal leading-relaxed transition-colors text-white hover:text-yellow-600 focus:text-yellow-500 text-xs"
//               >
//                 FIND YOUR DOCTOR
//               </Link>
//             </li>
//             <li>
//                <Link to="/about_us"
//                 class="block font-sans text-base antialiased font-normal leading-relaxed transition-colors text-white hover:text-yellow-600 focus:text-yellow-500 text-xs"
//               >
//                 OUR STORY
//               </Link>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 class="block font-sans text-base antialiased font-normal leading-relaxed transition-colors text-white hover:text-yellow-600 focus:text-yellow-500 text-xs"
//               >
//                 CODE OF CONDUCT
//               </a>
//             </li>
            
//             {/* social media icons */}
//             <div class="gap-x-4 gap-y-4 xs:justify-between  flex flex-row">
//             <a href="https://facebook.com">
//             <FaFacebookSquare size='1rem' color='white'/>
//             </a>
//             <a href="https://www.instagram.com/">
//             <FaInstagram size='1rem' color="white"/>
//             </a>
//             <a href="https://www.youtube.com/">
//             <FaYoutube size='1rem' color="white"/>
//             </a>
//             </div>
//           </ul>
//         </div>
        
//         <p class="flex-row flex-wrap items-center justify-center text-center gap-y-6 gap-x-12 md:justify-between block font-sans text-base antialiased font-normal leading-relaxed text-center text-white text-xs">
//           Copyright: © 2024 Nutricare
//         </p>
//       </footer>
//     </div>
//   );
// }

// export default Footer;

import Logo from "../assets/Logo1.png";
import { Link } from "react-router-dom";
import { FaFacebookSquare, FaInstagram, FaYoutube } from "react-icons/fa";


function Footer() {
  return (
    <div class="p-8 pt-32 pl-40">
      <footer class="w-11/12 p-5 bg-gray-800 bg-clip-border rounded-xl ">
        <div class="gap-y-6 gap-x-12 md:justify-between  flex flex-row flex-wrap items-center justify-center text-center">
          <Link to="/">
            <img src={Logo} alt="logo" className="Logo max-w-60" />
          </Link>
          <ul class="flex flex-wrap items-center gap-y-2 gap-x-8">
            <li>
              <Link to="/recipe_vault"
                class="block font-sans text-base antialiased font-normal leading-relaxed transition-colors text-white hover:text-yellow-600 focus:text-yellow-500 text-xs"
              >
                RECIPE VAULT

              </Link>
            </li>
            <li>
              <Link to="/assistant"
                class="block font-sans text-base antialiased font-normal leading-relaxed transition-colors text-white hover:text-yellow-600 focus:text-yellow-500 text-xs"
              >
                VIRTUAL ASSISTANT
              </Link>
            </li>
            <li>
              <Link to="/HealthGuide"
                class="block font-sans text-base antialiased font-normal leading-relaxed transition-colors text-white hover:text-yellow-600 focus:text-yellow-500 text-xs"
              >
                HEALTH GUIDE
              </Link>
            </li>
            <li>
              <Link to="/findDoctor"
                class="block font-sans text-base antialiased font-normal leading-relaxed transition-colors text-white hover:text-yellow-600 focus:text-yellow-500 text-xs"
              >
                FIND YOUR DOCTOR
              </Link>
            </li>
            <li>
              <Link to="/about_us"
                class="block font-sans text-base antialiased font-normal leading-relaxed transition-colors text-white hover:text-yellow-600 focus:text-yellow-500 text-xs"
              >
                OUR STORY
              </Link>
            </li>
            <li>
              <a
                href="#"
                class="block font-sans text-base antialiased font-normal leading-relaxed transition-colors text-white hover:text-yellow-600 focus:text-yellow-500 text-xs"
              >
                CODE OF CONDUCT
              </a>
            </li>

            {/* social media icons */}
            <div class="gap-x-4 gap-y-4 xs:justify-between  flex flex-row">
              <a href="https://facebook.com">
                <FaFacebookSquare size='1rem' color='white' />
              </a>
              <a href="https://www.instagram.com/">
                <FaInstagram size='1rem' color="white" />
              </a>
              <a href="https://www.youtube.com/">
                <FaYoutube size='1rem' color="white" />
              </a>
            </div>
          </ul>
        </div>

        <p class="flex-row flex-wrap items-center justify-center text-center gap-y-6 gap-x-12 md:justify-between block font-sans text-base antialiased font-normal leading-relaxed text-center text-white text-xs">
          Copyright: © 2024 Nutricare
        </p>
      </footer>
      <div className="border-t border-gray-700 mt-4 pt-2 text-center text-xs">
        COPYRIGHT: &copy; 2024 Nutricare
      </div>
    </div>
  );
}

export default Footer;