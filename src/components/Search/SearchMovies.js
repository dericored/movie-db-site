import SearchBar from "./SearchBar";
import SearchMovieList from "./SearchMovieList";
import { useState, useContext } from "react";
import { Context } from "../../context";

const SearchMovies = () => {
  const { openSidebar, searchResult } = useContext(Context);
  const [openSidebarValue, setOpenSidebarValue] = openSidebar;
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div
      className={`flex flex-col p-10 bg-gradient-to-br from-indigo-1000 to-indigo-950 min-h-screen transition-width duration-300 ease-in-out ${
        openSidebarValue ? "md:w-10/12 w-full" : "w-full"
      }`}
    >
      <div className="flex p-5 justify-center mt-28 mb-10">
        <div className="flex flex-col pt-2 relative mx-auto">
          {/* Label */}
          <label className="text-white text-opacity-30 text-2xl text-center font-bold">
            Find Movies and TV Shows
          </label>
          {/* Search Bar */}
          <SearchBar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            setIsLoading={setIsLoading}
          />
        </div>
      </div>
      {/* Search Result */}
      <SearchMovieList isLoading={isLoading} />
    </div>
  );
};

export default SearchMovies;
