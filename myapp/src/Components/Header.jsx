import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom


const Header = () => {
  // State to track whether the menu is open or closed
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);

  };
  



  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse"> {/* Replace anchor tag with Link */}
          <img src="/small.png" alt="my-blog" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">BLOG WORLD </span>
        </Link>
        <button
          onClick={toggleMenu} // Add onClick event to toggle the menu
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text- rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen ? "true" : "false"} // Update aria-expanded based on menu state
        >
          <span className="sr-only">{isMenuOpen ? "Close menu" : "Open menu"}</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M5 1l7 6-7 6" : "M1 1h15M1 7h15M1 13h15"} />
          </svg>
        </button>
        <div className={`w-full md:block md:w-auto ${isMenuOpen ? "" : "hidden"}`} id="navbar-default">
          <ul className="font-medium flex flex-col justify-center p-10 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li className="md:mr-auto">
              <Link to="/" className="block py-2 px-3 text-black bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Blog</Link>
            </li>
            <li>
              <Link to="/create" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Create Posts</Link>
            </li>
            {/* Contact Us as a Button */}
            <li className="flex justify-center mt-0 mb-0">
              <button className="py-2 px-6 bg-purple-500 text-white rounded-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                Contact Us
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
