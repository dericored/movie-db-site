import { Link } from "react-router-dom";

const TrendingMovieCard = ({ item }) => {
  const { imdbID, Title, Poster, Plot, imdbRating, Genre } = item;
  const RTRating = item.Ratings.filter(
    (rating) => rating.Source === "Rotten Tomatoes"
  )[0];

  return (
    <Link to={`/details/${imdbID}`}>
      <div className="container my-3 flex flex-col md:flex-row w-auto items-center">
        {/* Image */}

        <img
          src={Poster}
          alt={Title}
          className="w-44 h-auto mb-3 rounded-xl cursor-pointer border-2 border-yellow-400 filter drop-shadow-yellow transform"
        />

        {/* Info */}
        <div className="container w-11/12 sm:ml-7 filter drop-shadow-gray-sm bg-white bg-opacity-5 hover:bg-opacity-10 rounded-2xl cursor-pointer duration-200">
          <div className="container flex flex-col px-5 py-3 items-start place-content-around h-full">
            {/* Title */}
            <div className="container flex flex-wrap items-end">
              <span className="text-xl text-white font-bold mr-2 max-w-full">
                {Title}
              </span>
              <span className="text-md text-white mr-2">
                {item.Type === "movie"
                  ? `${item.Released.split(" ")[2]}`
                  : `${item.Year}`}
              </span>
              <span className="text-md text-white opacity-70 mr-2">by</span>
              <span className="text-md text-white mr-2">
                {item.Type === "movie" ? `${item.Director}` : `${item.Writer}`}
              </span>
            </div>
            {/* Duration & Genre */}
            <div className="container flex flex-wrap mt-2 items-start text-sm text-white opacity-70">
              <h5>
                {item.Type === "movie"
                  ? `${item.Runtime}`
                  : `${item.totalSeasons}`}
              </h5>
              <span className="mx-1">|</span>
              <h5>{Genre}</h5>
            </div>

            {/* Plot */}
            <div className="container my-5 items-start">
              <p className="text-sm text-white opacity-70 text-justify">
                {Plot}
              </p>
            </div>
            {/* Ratings */}
            <div className="container flex mt-3 mb-2 justify-start">
              {/* IMDb */}
              <div className="container flex w-auto mr-3 items-center">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/IMDb_Logo_Square.svg/2048px-IMDb_Logo_Square.svg.png"
                  alt=""
                  className="h-5 w-5 mr-2"
                />
                <span className="text-sm text-white mr-3">{imdbRating}</span>
              </div>
              {/* Rotten Tomatoes */}
              <div className="container flex w-auto mr-3 items-center">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Rotten_Tomatoes.svg/1009px-Rotten_Tomatoes.svg.png"
                  alt=""
                  className="h-5 w-5 mr-2"
                />
                <span className="text-sm text-white mr-3">
                  {RTRating ? RTRating.Value : "-"}
                </span>
              </div>
              {/* Letterboxd */}
              <div className="container flex w-auto mr-3 items-center">
                <img
                  src="https://a.ltrbxd.com/logos/letterboxd-mac-icon.png"
                  alt=""
                  className="h-5 w-5 mr-2"
                />
                <span className="text-sm text-white mr-3">-</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TrendingMovieCard;
