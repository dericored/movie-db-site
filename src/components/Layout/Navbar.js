import { useState, useContext } from "react";
import { Context } from "../../context";
import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { openSidebar, searchResult } = useContext(Context);
  const [openSidebarValue, setOpenSidebarValue] = openSidebar;
  const options = [
    { name: "USA", value: "us" },
    { name: "Singapore", value: "sg" },
    { name: "China", value: "cn" },
    { name: "Australia", value: "aus" },
    { name: "Indonesia", value: "id" },
  ];
  const [dropdownState, setDropdownState] = useState(options[0]);

  return (
    <>
      <div className="z-50 w-full">
        <div className="flex bg-gradient-to-b from-indigo-1000 to-indigo-1000x p-5 border-b-2 border-gray-500 justify-between items-center">
          <div className="flex items-center">
            {/* Menu Bar for Sidebar */}
            <button
              className={`text-white filter drop-shadow-white duration-300 transform ${
                openSidebarValue && "rotate-90"
              }`}
              onClick={() => setOpenSidebarValue(!openSidebarValue)}
            >
              <svg
                xmlns="https://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            {/* Brand */}
            <span className="text-white text-3xl ml-10 font-semibold filter drop-shadow-white">
              <Link to={"/"}>CineAstes</Link>
            </span>
          </div>
          <div className="container w-auto z-50 hidden sm:block">
            {/* Dropdown */}
            <Dropdown
              indicator={"Region: "}
              options={options}
              width={"w-auto"}
              setDropdownState={setDropdownState}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
