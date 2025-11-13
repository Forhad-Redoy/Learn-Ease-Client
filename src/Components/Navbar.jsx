import React, { use, useEffect, useState } from 'react';
import MyLink from './MyLink';
import { Link, NavLink } from "react-router";
import MyContainer from './MyContainer';
import { toast } from 'react-toastify';
import { ClockLoader } from 'react-spinners';
import { AuthContext } from '../Context/AuthContext';
import { FaUser } from 'react-icons/fa';
import { IoLogIn, IoLogOut } from 'react-icons/io5';
import { FaGear } from 'react-icons/fa6';

const Navbar = () => {
     const { user, signoutUserFunc, setUser,  setLoading } =
    use(AuthContext);
  // const [showDropdown, setShowDropdown] = useState(false);

  const handleLogout = () => {
    signoutUserFunc()
      .then(() => {
        setLoading(false);
        toast.success("Logout successful");
        setUser(null);
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };
  const [theme, setTheme] = useState(localStorage.getItem('theme') || "light")

  useEffect(() => {
    const html = document.querySelector('html')
     html.setAttribute("data-theme", theme)
     localStorage.setItem("theme", theme)
  }, [theme])


  const handleTheme = (checked) => {
    setTheme(checked ? "dark": "light")
  }
    return (
        <div className="py-2 navbar  shadow-sm ">
      <MyContainer className="flex items-center justify-between">
        {/* Left side */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <MyLink to={"/"}>Home</MyLink>
              </li>
              <li>
                <MyLink to={"/all-courses"}>All Courses</MyLink>
              </li>
              <li>
                <MyLink to={"/add-course"}>Add Course</MyLink>
              </li>
              <li>
                <MyLink to={"/my-courses"}>My Courses</MyLink>
              </li>
            </ul>
          </div>
          <NavLink className=" text-xl font-semibold flex" to={"/"}>
          <img src="https://learneasy.au/wp-content/uploads/2022/07/Rectangle.ai_.svg" alt="" className='w-15 h-10' />
          
            Learn<span className=' text-pink-500'>Easy</span>
          </NavLink>
        </div>

        {/* Center links */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <MyLink to={"/"}>Home</MyLink>
            </li>
            <li>
               <MyLink to={"/all-courses"}>All Courses</MyLink>
            </li>
            <li>
              <MyLink to={"/add-course"}>Add Course</MyLink>
            </li>
            <li>
                <MyLink to={"/my-courses"}>My Courses</MyLink>
              </li>
          </ul>
        </div>

        {/* Right side: User section */}
        <div className="navbar-end flex items-center gap-4">
          <input
           onChange={(e)=> handleTheme(e.target.checked)}
           type="checkbox"
           defaultChecked={localStorage.getItem('theme') === "dark"}
           className="toggle"/>


           {user ? (
          <div className="dropdown dropdown-end z-50">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-9 border-2 border-gray-300 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  referrerPolicy="no-referrer"
                  src={user.photoURL || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"}
                />
              </div>
            </div>
            <ul
              tabIndex="-1"
              className="menu  menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
            >
              <div className=" pb-3 border-b border-b-gray-200">
                <li className="text-sm font-bold">{user.displayName}</li>
                <li className="text-xs">{user.email}</li>
              </div>
              
              <li className="mt-1">
                <Link to={"/my-enrolls"}>
                  <FaUser />My Enrolls
                </Link>
              </li>

              {/* <li>
                <Link to={"/my-courses"}>
                  My Courses
                </Link>
              </li> */}

              {/* <li >
                <Link to={"/my-downloads"}>
                 My Downloads
                </Link>
              </li> */}

              {/* <input
           onChange={(e)=> handleTheme(e.target.checked)}
           type="checkbox"
           defaultChecked={localStorage.getItem('theme') === "dark"}
           className="toggle"/> */}
              
              {/* <li>
                <a>
                  {" "}
                  <FaGear /> Settings
                </a>
              </li> */}
              <li>
                <button
                  onClick={handleLogout}
                  className="btn btn-xs mt-1 text-left bg-linear-to-r from-pink-500 to-red-500 text-white"
                >
                  <IoLogOut /> Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <Link
            to={"login"}
            className="btn rounded-full border-gray-300  btn-sm bg-linear-to-r from-pink-500 to-red-500 text-white"
          >
            {" "}
            <IoLogIn /> Login
          </Link>
        )}
          {/* {loading ? (
            <ClockLoader color="#e74c3c" />
          ) : user ? (
            <>
              <div
                className="relative"
                onMouseEnter={() => setShowDropdown(true)}
                onMouseLeave={() => setShowDropdown(false)}
              >
                <img
                  src={user?.photoURL || "https://via.placeholder.com/88"}
                  alt="User Avatar"
                  className="h-[45px] w-[45px] rounded-full cursor-pointer border-2 border-purple-400"
                />
                {showDropdown && (
                  <div className="absolute right-0 mt-2 w-52 bg-white shadow-lg rounded-lg p-4 z-50">
                    <h2 className="text-lg text-center font-semibold text-gray-800">
                      {user?.displayName || "No Name"}
                    </h2>
                    
                  </div>
                )}
              </div>
              <button
                onClick={handleLogout}
                className="bg-purple-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-purple-600 transition"
              >
                Sign Out
              </button>
            </>
          ) : (
            <Link
              to={"/login"}
              className="bg-purple-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-purple-600 transition"
            >
              Login
            </Link>
          )} */}
        </div>
      </MyContainer>
    </div>
    );
};

export default Navbar;