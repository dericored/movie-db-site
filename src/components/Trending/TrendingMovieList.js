import { Context } from "../../context";
import TrendingMovieCard from "./TrendingMovieCard";
import { useContext } from "react";
import Loader from "../Layout/Loader";

const TrendingMovieList = ({ isLoading }) => {
  const { openSidebar, searchResult } = useContext(Context);
  const [searchResultValue, setSearchResultValue] = searchResult;

  if (isLoading) {
    // set loader
    return <Loader />;
  } else {
    return (
      <>
        {/* display each movie */}
        <div className="flex flex-col justify-center px-10 w-full">
          {searchResultValue.map((item) => (
            <TrendingMovieCard key={item.imdbID} item={item} />
          ))}
        </div>
      </>
    );
  }
};

export default TrendingMovieList;
