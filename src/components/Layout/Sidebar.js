import { useContext } from "react";
import { Context } from "../../context";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const { openSidebar, searchResult } = useContext(Context);
  const [openSidebarValue, setOpenSidebarValue] = openSidebar;

  return (
    <div
      className={`z-40 bg-gradient-to-br text-center border-b-2 border-gray-500 md:border-0 md:text-left from-indigo-1100x to-indigo-1100 opacity-90 min-h-full flex-col py-5 transition-width duration-300 ease-in-out ${
        openSidebarValue ? "md:w-2/12 w-full" : "w-0 text-opacity-0 "
      }`}
    >
      <Link to={"/"}>
        <div
          className={`text-md w-full duration-300 hover:bg-white hover:bg-opacity-25 filter drop-shadow-white-sm text-white p-4 cursor-pointer ${
            !openSidebarValue && "hidden"
          }`}
        >
          Search Movies
        </div>
      </Link>
      <Link to={"/trending"}>
        <div
          className={`text-md w-full duration-300 hover:bg-white hover:bg-opacity-25 filter drop-shadow-white-sm text-white p-4 cursor-pointer ${
            !openSidebarValue && "hidden"
          }`}
        >
          Trending & Top Rated
        </div>
      </Link>
      <Link to={"/review"}>
        <div
          className={`text-md w-full duration-300 hover:bg-white hover:bg-opacity-25 filter drop-shadow-white-sm text-white p-4 cursor-pointer ${
            !openSidebarValue && "hidden"
          }`}
        >
          Critics' Reviews
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
