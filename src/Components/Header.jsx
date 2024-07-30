import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.png';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-1">
      <div className="flex items-center justify-between px-4 py-3 sm:p-0">
        <div>
          <Link to="/">
            <img src={Logo} alt="logo" className="h-8" />
          </Link>
        </div>
        <div className="sm:hidden">
          <button type="button" onClick={() => setIsOpen(!isOpen)} className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600">
            <svg viewBox="0 0 20 20" fill="currentColor" className="menu w-6 h-6">
              {isOpen ? (
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414z" clipRule="evenodd" />
              ) : (
                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 6a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm1 5a1 1 0 100 2h12a1 1 0 100-2H4z" clipRule="evenodd" />
              )}
            </svg>
          </button>
        </div>
      </div>
      <nav className={`sm:flex ${isOpen ? 'block' : 'hidden'}`}>
        <Link to="/recipe_vault" className="mt-2 sm:mt-0 block px-4 py-2 mx-2 sm:mx-4 text-gray-900 font-semibold rounded hover:bg-gray-300">
          Recipe Vault
        </Link>
        <Link to="/assistant" className="mt-2 sm:mt-0 block px-4 py-2 mx-2 sm:mx-4 text-gray-900 font-semibold rounded hover:bg-gray-300">
          Virtual Assistant
        </Link>
        <Link to="/HealthGuide" className="mt-2 sm:mt-0 block px-4 py-2 mx-2 sm:mx-4 text-gray-900 font-semibold rounded hover:bg-gray-300">
          Health Guide
        </Link>
        <Link to="/findDoctor" className="mt-2 sm:mt-0 block px-4 py-2 mx-2 sm:mx-4 text-gray-900 font-semibold rounded hover:bg-gray-300">
          Find Your Doctor
        </Link>
        <Link to="/about_us" className="mt-2 sm:mt-0 block px-4 py-2 mx-2 sm:mx-4 text-gray-900 font-semibold rounded hover:bg-gray-300">
          Our Story
        </Link>
      </nav>
    </header>
  );
}