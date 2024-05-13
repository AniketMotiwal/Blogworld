import React from 'react'
import { Link } from 'react-router-dom';
const Footer = () => {
  return (

    <footer className="bg-[#0e0e0e] text-white transition duration-300 ease-in-out">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <nav className="flex justify-between items-center mb-6 md:mb-0">
          <a href="#" className="flex items-center">
            <img src="/small.png" className="h-8 me-3" alt="" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Blog</span>
          </a>
          <ul className="flex space-x-4 text-gray-500 dark:text-gray-400 font-medium">
            <li>
              <Link to="/" className="hover:underline text-white hover:text-blue-500 hover:cursor-pointer">Home</Link>
            </li>
            <li>
              <Link to="/myposts/:id" className="hover:underline text-white hover:text-blue-500 hover:cursor-pointer">Dashboard</Link>
            </li>
            <li>
              <Link to="/" className="hover:underline text-white hover:text-blue-500 hover:cursor-pointer">About Us</Link>
            </li>
          </ul>

        </nav>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between transition duration-300 ease-in-out">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024<a href="#" className="hover:underline">Aniket Motiwal</a>. All Rights Reserved.</span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            {/* Social media icons */}
            <a href="https://discord.com/" class="text-white hover:text-gray-900 dark:hover:text-white ms-5 hover:cursor-pointer">
              <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="#fff"><path d="M19 24h-14c-2.761 0-5-2.239-5-5v-14c0-2.761 2.239-5 5-5h14c2.762 0 5 2.239 5 5v14c0 2.761-2.238 5-5 5zm-3.288-4.888l-.424-1.48 1.024.952.968.896 1.72 1.52v-14.352c0-.912-.736-1.648-1.64-1.648h-10.72c-.904 0-1.64.736-1.64 1.648v10.816c0 .912.736 1.648 1.64 1.648h9.072zm-1.44-3.664c1.768-.056 2.448-1.216 2.448-1.216 0-2.576-1.152-4.664-1.152-4.664-1.152-.864-2.248-.84-2.248-.84l-.112.128c1.36.416 1.992 1.016 1.992 1.016-.832-.456-1.648-.68-2.408-.768-.576-.064-1.128-.048-1.616.016l-.136.016c-.28.024-.96.128-1.816.504l-.472.232s.664-.632 2.104-1.048l-.08-.096s-1.096-.024-2.248.84c0 0-1.152 2.088-1.152 4.664 0 0 .672 1.16 2.44 1.216l.536-.664c-1.016-.304-1.4-.944-1.4-.944l.224.136.032.024.032.018.009.004.031.018c.2.112.4.2.584.272.328.128.72.256 1.176.344.6.112 1.304.152 2.072.008.376-.064.76-.176 1.16-.344.28-.104.592-.256.92-.472 0 0-.4.656-1.448.952l.528.648zm-3.72-3.736c-.456 0-.816.4-.816.888s.368.888.816.888c.456 0 .816-.4.816-.888.008-.488-.36-.888-.816-.888zm2.92 0c-.456 0-.816.4-.816.888s.368.888.816.888c.456 0 .816-.4.816-.888s-.36-.888-.816-.888z" /></svg>
              <span class="sr-only "></span>
            </a>
            <a href="https://github.com/" class="text-white hover:text-gray-900 dark:hover:text-white ms-5 hover:cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#fff"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
              <span class="sr-only"></span>
            </a>
            <a href="#" class="text-white hover:text-gray-900 dark:hover:text-white ms-5 hover:cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#fff"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
              <span class="sr-only"></span>
            </a>
          </div>


        </div>
      </div>
    </footer>



  )
}

export default Footer
