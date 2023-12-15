import React, { useContext, useState } from "react";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { ThemeToggle } from "../App";
import { Link } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";

const Header = () => {
  const themeToggle = useContext(ThemeToggle);
  const [ifDark, setIfDark] = React.useState(true);
  const [menuTgl, setMenuTgl] = useState(false);

  return (
    <nav className="bg-neutral-400 sticky top-0 z-50">
      <div className="container mx-auto font-sans md:flex">
        <div className="flex-1 p-2">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-xl text-gray-900">
              TaskTracking.netlify.app
            </Link>

            <div className="flex items-center gap-2">
              <IoIosMenu
                className="text-3xl text-black bg-slate-400 rounded cursor-pointer hover:bg-slate-500 md:hidden sm:block"
                onClick={() => (menuTgl ? setMenuTgl(false) : setMenuTgl(true))}
              />

              <button
                onClick={() => {
                  if (ifDark) {
                    setIfDark(false);
                    themeToggle(false);
                  } else {
                    setIfDark(true);
                    themeToggle(true);
                  }
                }}
                className="bg-slate-400 p-3 rounded-full my-auto"
              >
                {ifDark ? <BsFillMoonFill /> : <BsFillSunFill />}
              </button>
            </div>
          </div>
        </div>

        <div
          className={` flex items-center md:flex-row flex-col md:inline-flex ${menuTgl ? "block" : "hidden"}`}
        >
          <Link to="/about" className=" p-2 mx-2 rounded ">
            About
          </Link>
          <Link to="/contact" className=" p-2 mx-2 rounded">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
