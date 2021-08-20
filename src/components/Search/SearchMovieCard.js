import { Link } from "react-router-dom";

const SearchMovieCard = ({ item }) => {
  // takes individual response as 'item'
  const { imdbID, Title, Poster, imdbRating } = item;

  const RTRating = item.Ratings.filter(
    (rating) => rating.Source === "Rotten Tomatoes"
  )[0];

  return (
    <div className="container sm:mx-3 my-5 flex flex-col transform hover:scale-105 duration-200 items-center">
      {/* Poster */}
      <Link to={`/details/${imdbID}`}>
        <img
          className="w-52 h-auto object-cover rounded-xl mx-auto border-2 border-yellow-400 filter drop-shadow-yellow"
          src={Poster}
          alt={Title}
        />
      </Link>

      {/* Info Box */}
      <Link to={`/details/${imdbID}`}>
        <div className="container flex flex-col bg-white bg-opacity-5 filter drop-shadow-gray-sm rounded-md w-60 mt-3 p-3 mx-auto">
          <div className="container">
            {/* Title */}
            <h3 className="text-lg text-white text-center font-semibold">
              {Title}
            </h3>
          </div>
          {/* Year, Director, Duration */}
          <div className="container flex justify-center text-center mt-1">
            <p className="text-white opacity-70 text-xs">
              {item.Type === "movie"
                ? `${item.Released.split(" ")[2]} | ${item.Director} | ${
                    item.Runtime
                  }`
                : `${item.Year} | ${item.Writer} | ${item.totalSeasons} Season(s)`}
            </p>
          </div>
          <hr className="border-gray-500 mt-2" />
          {/* Ratings */}
          {/* IMDb */}
          <div className="container flex mt-3 justify-evenly mb-2">
            <div className="container flex items-center justify-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/IMDb_Logo_Square.svg/2048px-IMDb_Logo_Square.svg.png"
                alt=""
                className="h-6 w-6"
              />
              <span className="text-sm text-white ml-2">{imdbRating}</span>
            </div>
            {/* RT */}
            <div className="container flex items-center justify-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Rotten_Tomatoes.svg/1009px-Rotten_Tomatoes.svg.png"
                alt=""
                className="h-6 w-6"
              />
              <span className="text-sm text-white ml-2">
                {RTRating ? RTRating.Value : "-"}
              </span>
            </div>
            {/* Letterboxd */}
            <div className="container flex items-center justify-center">
              <img
                src="https://a.ltrbxd.com/logos/letterboxd-mac-icon.png"
                alt=""
                className="h-6 w-6"
              />
              <span className="text-sm text-white ml-2">-</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default SearchMovieCard;
