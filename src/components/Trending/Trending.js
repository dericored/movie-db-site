import { useContext, useEffect, useState } from "react";
import { Context } from "../../context";
import Dropdown from "../Layout/Dropdown";
import TrendingMovieList from "./TrendingMovieList";

const Trending = () => {
  const { openSidebar, searchResult } = useContext(Context);
  const [searchResultValue, setSearchResultValue] = searchResult;
  const [openSidebarValue, setOpenSidebarValue] = openSidebar;
  const options = [
    { name: "Trending: Today", value: "Trending: Today" },
    { name: "Trending: This Week", value: "Trending: This Week" },
    { name: "All-time Top 50", value: "All-time Top 50" },
  ];
  const [dropdownState, setDropdownState] = useState(options[0]);
  const [isLoading, setIsLoading] = useState(false);

  // set fetch url depending on the dropdown state
  const getUrl = () => {
    if (dropdownState === options[2].value)
      return "https://api.themoviedb.org/3/movie/top_rated?api_key=fab42f847c9afb72cb37143df793dd94&language=en-US&page=1&region=US";
    else if (dropdownState === options[0].value)
      return "https://api.themoviedb.org/3/trending/movie/day?api_key=fab42f847c9afb72cb37143df793dd94";
    else
      return "https://api.themoviedb.org/3/trending/movie/week?api_key=fab42f847c9afb72cb37143df793dd94";
  };

  useEffect(() => {
    setIsLoading(true);
    setSearchResultValue([]);

    // fetch from themoviedb.com
    fetch(getUrl())
      .then((res) => res.json())
      .then((data) => {
        // themoviedb.com doesn't provide imdb and RT ratings
        // ratings must be collected from omdbapi.com by imdbIDs
        // first fetch response doesn't contain imdbIDs, so need to fetch imdbID by tmdbID
        let ids = data.results.map((item) => item.id);

        const allPromises = ids.map(async (id) => {
          // fetch imdbID by tmdbID
          const res = await fetch(
            `https://api.themoviedb.org/3/movie/${id}?api_key=fab42f847c9afb72cb37143df793dd94&language=en-US`
          );
          return await res.json();
        });
        Promise.all(allPromises)
          .then((data) => data.map((value) => value.imdb_id))
          .then((x) => {
            // fetch ratings by imdbID from omdbapi.com
            const allPromises = x.map(async (imdbID) => {
              const res = await fetch(
                `https://www.omdbapi.com/?i=${imdbID}&apikey=40d1fefd`
              );
              return await res.json();
            });
            Promise.all(allPromises).then((data) => {
              setSearchResultValue(data);
              setIsLoading(false);
            });
          });
      })
      .catch((err) => console.log(err));
  }, [dropdownState]);

  return (
    <div
      className={`flex flex-col p-10 bg-gradient-to-br from-indigo-1000 to-indigo-950 min-h-screen transition-width duration-300 ease-in-out ${
        openSidebarValue ? "md:w-10/12 w-screen" : "w-screen"
      }`}
    >
      <div className="flex flex-col sm:flex-row ml-10 mb-10 z-10">
        {/* Dropdown */}
        <Dropdown
          indicator={""}
          options={options}
          width={"w-52"}
          setDropdownState={setDropdownState}
        />
        {/* TMDB attribution */}
        <div className="flex ml-5 items-center">
          <h4 className="text-white filter drop-shadow-white-sm text-lg font-semibold mr-3 mt-10 sm:mt-0">
            Powered by
          </h4>
          <img
            className="h-9"
            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
            alt=""
          />
        </div>
      </div>
      {/* Movie List */}
      <TrendingMovieList isLoading={isLoading} />
    </div>
  );
};

export default Trending;
