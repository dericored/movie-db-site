import { useState, useContext } from "react";
import { Context } from "../../context";
import ReviewColumn from "./ReviewColumn";
import SearchReview from "./SearchReview";
import Loader from "../Layout/Loader";

const CriticsReview = () => {
  const { openSidebar, searchResult } = useContext(Context);
  const [openSidebarValue, setOpenSidebarValue] = openSidebar;
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div
      className={`flex flex-col p-10 bg-gradient-to-br from-indigo-1000 to-indigo-950 min-h-screen transition-width duration-300 ease-in-out ${
        openSidebarValue ? "md:w-10/12 w-full" : "w-full"
      }`}
    >
      <label className="text-white text-opacity-25 text-2xl text-center font-bold">
        Find Critic Reviews
      </label>
      {/* Search Bar */}
      <SearchReview
        setSearchResults={setSearchResults}
        setIsLoading={setIsLoading}
      />
      {/* set loader */}
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {/* NYT Column */}
          <ReviewColumn
            name={"The New York Times"}
            logo={
              "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/New_York_Times_T_icon.svg/1200px-New_York_Times_T_icon.svg.png"
            }
            searchResults={searchResults.nyt}
          />
          {/* The Guardian Column */}
          <ReviewColumn
            name={"The Guardian"}
            logo={
              "https://implant-replacement.com/wp-content/uploads/2019/03/theguardian.png"
            }
            searchResults={searchResults.guardian}
          />
        </>
      )}
    </div>
  );
};

export default CriticsReview;
