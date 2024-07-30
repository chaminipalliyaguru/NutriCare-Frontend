import Logo from "../assets/Logo1.png";
import { Link } from "react-router-dom";
import { FaFacebookSquare, FaInstagram, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-gray-900 text-white p-4 mt-8 rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg ml-5 mr-5 mb-10 bottom-1">
      <footer className="container mx-auto flex flex-col md:flex-row justify-between items-center py-4">
        <div className="flex items-center justify-start mb-4 md:mb-0">
          <Link to="/">
            <img src={Logo} alt="NutriCare Logo" className="h-6 w-28" />
          </Link>
        </div>
        <ul className="flex flex-wrap md:flex-row justify-center items-center gap-y-2 gap-x-8 mb-4 md:mb-0">
          <li>
            <Link
              to="/recipe_vault"
              className="text-xs antialiased leading-relaxed transition-colors hover:text-yellow-600"
            >
              RECIPE VAULT
            </Link>
          </li>
          <li>
            <Link
              to="/assistant"
              className="text-xs antialiased leading-relaxed transition-colors hover:text-yellow-600"
            >
              VIRTUAL ASSISTANT
            </Link>
          </li>
          <li>
            <Link
              to="/HealthGuide"
              className="text-xs antialiased leading-relaxed transition-colors hover:text-yellow-600"
            >
              HEALTH GUIDE
            </Link>
          </li>
          <li>
            <Link
              to="/findDoctor"
              className="text-xs antialiased leading-relaxed transition-colors hover:text-yellow-600"
            >
              FIND YOUR DOCTOR
            </Link>
          </li>
          <li>
            <Link
              to="/about_us"
              className="text-xs antialiased leading-relaxed transition-colors hover:text-yellow-600"
            >
              OUR STORY
            </Link>
          </li>
          <li>
            <Link
              to="/CodeOfConduct"
              className="text-xs antialiased leading-relaxed transition-colors hover:text-yellow-600"
            >
              CODE OF CONDUCT
            </Link>
          </li>
        </ul>
        <div className="flex justify-center items-center gap-x-4">
          <a href="https://facebook.com">
            <FaFacebookSquare size="1.5rem" />
          </a>
          <a href="https://www.instagram.com/">
            <FaInstagram size="1.5rem" />
          </a>
          <a href="https://www.youtube.com/">
            <FaYoutube size="1.5rem" />
          </a>
        </div>
      </footer>
      <div className="border-t border-gray-700 mt-4 pt-2 text-center text-xs">
        COPYRIGHT: &copy; 2024 Nutricare
      </div>
    </div>
  );
}

export default Footer;