import { Context } from "../../context";
import SearchMovieCard from "./SearchMovieCard";
import { useContext } from "react";
import Loader from "../Layout/Loader";

const SearchMovieList = ({ isLoading }) => {
  const { openSidebar, searchResult } = useContext(Context);
  const [searchResultValue, setSearchResultValue] = searchResult;

  if (isLoading) {
    return <Loader />;
  } else {
    return (
      <>
        {/* display individual search result */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center px-10">
          {searchResultValue.map((item) => (
            <SearchMovieCard key={item.imdbID} item={item} />
          ))}
        </div>
      </>
    );
  }
};

export default SearchMovieList;
