import { Link } from "react-router-dom";
import "./Navbar.css";
import PropTypes from "prop-types";

const Navbar = ({ role }) => {
  return (
    <nav className="sticky top-0 bg-[rgb(17,24,39)] z-20 border-b border-gray-600 h-[82px]">
      <div className="flex flex-wrap items-center justify-between ms-[3rem] p-4 h-full">
        <a href="" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="https://cdn3.iconfinder.com/data/icons/gradient-general-pack/512/checkmark-01-1024.png"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            Talent Trove
          </span>
        </a>
        {/* <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-70 focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div> */}
        {/* <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1`}
          id="navbar-sticky"
        >
          {/* <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white bg-gray-800 md:bg-gray-900 border-gray-700">
            <li>
              <Link
                to="#"
                className="block py-2 px-3 text-white bg-purple-700 rounded md:bg-transparent md:text-purple-700 md:p-0 md:text-purple-500"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-purple-700 md:p-0 md:hover:text-purple-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-purple-700 md:p-0 md:hover:text-purple-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-purple-700 md:p-0 md:hover:text-purple-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700"
              >
                Contact
              </Link>
            </li>
            {isLoggedIn && ( 
              <li>
                <Link to={`/${role}-profile`}>
                  <span className="block py-2 cursor-pointer px-20 text-gray-900 rounded text-white md:hover:bg-gray-700 md:hover:text-white md:hover:bg-transparent border-gray-700">
                    {userName}
                  </span>
                </Link>
              </li>
            )}
          </ul>
        </div> */}
        <div className={`${!role || role === "admin" ? "hidden" : ""}`}>
          <Link to={`${role}/profile`}>
            <img
              src="https://p7.hiclipart.com/preview/184/113/161/user-profile-computer-icons-clip-art-profile.jpg"
              alt=""
              width={50}
              height={50}
              className="rounded-full me-6"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  role: PropTypes.string,
};

export default Navbar;
