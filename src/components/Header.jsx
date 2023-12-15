import React, { useContext } from "react";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { ThemeToggle } from "../App";
import { Link } from "react-router-dom";

const Header = () => {
  const themeToggle = useContext(ThemeToggle);
  const [ifDark, setIfDark] = React.useState(true);
  return (
    <nav className="bg-neutral-400 sticky top-0 z-50">
      <div className="container mx-auto p-1 font-sans md:flex">
        <div className="md:flex-1 md:flex align-middle sm:text-center sm:py-2 md:py-0">
          <Link to="/" className="sm:p-2 md:mx-2 rounded text-xl text-gray-900">
            TaskTracking.netlify.app
          </Link>
        </div>

        <div className="sm:text-center">
          <Link to="/about" className="p-2 mx-2 rounded">
            About
          </Link>
          <Link to="/contact" className="p-2 mx-2 rounded">
            Contact
          </Link>
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
    </nav>
  );
};

export default Header;
