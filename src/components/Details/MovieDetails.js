import { useState, useEffect, useContext } from "react";
import { Context } from "../../context";
import Loader from "../Layout/Loader";

const MovieDetails = (props) => {
  const [movie, setMovie] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const { openSidebar, searchResult } = useContext(Context);
  const [openSidebarValue, setOpenSidebarValue] = openSidebar;

  useEffect(() => {
    // fetch from omdbapi.com
    setIsLoading(true);
    setMovie([]);
    fetch(
      `https://www.omdbapi.com/?i=${props.match.params.id}&plot=full&apikey=40d1fefd`
    )
      .then((res) => res.json())
      .then((data) => {
        setMovie(data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  // set loader
  if (isLoading) {
    return (
      <div
        className={`flex items-center p-10 bg-gradient-to-br from-indigo-1000 to-indigo-950 min-h-screen justify-center ${
          openSidebarValue ? "md:w-10/12 w-full" : "w-full"
        }`}
      >
        <Loader />
      </div>
    );
  } else {
    const RTRating = movie.Ratings.filter(
      (rating) => rating.Source === "Rotten Tomatoes"
    )[0];

    return (
      <div
        className={`lg:flex p-10 bg-gradient-to-br from-indigo-1000 to-indigo-950 min-h-screen transition-width duration-300 ease-in-out ${
          openSidebarValue ? "md:w-10/12 w-full" : "w-full"
        }`}
      >
        <div className="container lg:w-4/12 p-5 flex flex-col sm:flex-row lg:flex-col lg:pl-12">
          {/* Poster */}
          <img
            src={movie.Poster}
            alt=""
            className="rounded-lg w-52 mb-5 border-2 border-yellow-400 filter drop-shadow-yellow"
          />
          <div className="container flex flex-col place-content-center sm:ml-10 lg:ml-0">
            <div className="container flex-flex-col my-3 filter drop-shadow-gray-sm">
              {/* Ratings */}
              <div className="container flex my-2 justify-start items-center">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/IMDb_Logo_Square.svg/2048px-IMDb_Logo_Square.svg.png"
                  alt=""
                  className="h-8 w-8"
                />
                <span className="text-md text-white opacity-50 w-28 ml-5">
                  IMDb
                </span>
                <span className="text-md text-white ml-3">
                  {movie.imdbRating}
                </span>
              </div>
              <div className="container flex my-2 justify-start items-center">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Rotten_Tomatoes.svg/1009px-Rotten_Tomatoes.svg.png"
                  alt=""
                  className="h-8 w-8"
                />
                <span className="text-md text-white opacity-50 w-28 ml-5">
                  Rotten Tomatoes
                </span>
                <span className="text-md text-white ml-3">
                  {RTRating ? RTRating.Value : "-"}
                </span>
              </div>
              <div className="container flex my-2 justify-start items-center">
                <img
                  src="https://a.ltrbxd.com/logos/letterboxd-mac-icon.png"
                  alt=""
                  className="h-8 w-8"
                />
                <span className="text-md text-white opacity-50 w-28 ml-5">
                  Letterboxd
                </span>
                <span className="text-md text-white ml-3">-</span>
              </div>
            </div>
            <hr className="border-t-2 border-white opacity-20 filter drop-shadow-gray-sm" />
            {/* Available */}
            <div className="flex container mt-5 filter drop-shadow-gray-sm">
              <span className="text-md text-white opacity-80 font-semibold mr-3">
                Available on:
              </span>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Netflix_icon.svg/2048px-Netflix_icon.svg.png"
                alt=""
                className="h-6 w-6"
              />
            </div>
          </div>
        </div>
        {/* Info */}
        <div className="container min-h-screen p-5 flex flex-col filter drop-shadow-gray-sm">
          <div className="container mb-7">
            {/* Title */}
            <span className="text-3xl font-bold text-white mr-3">
              {movie.Title}
            </span>
            {/* Side Info: values depend on the type of the media */}
            <span className="text-xl text-white">
              {movie.Type === "movie"
                ? movie.Released.split(" ")[2]
                : movie.Year}
            </span>
          </div>
          {/* Main Info */}
          <div className="container mb-7 text-lg text-white">
            <div className="flex container">
              <span className="opacity-50 w-40">
                {movie.Type === "movie" ? "Directed by" : "Written by"}
              </span>
              <span className="w-full">
                {movie.Type === "movie" ? movie.Director : movie.Writer}
              </span>
            </div>
            <div className="flex container">
              <span className=" opacity-50 w-40">Duration</span>
              <span className="w-full">
                {movie.Type === "movie"
                  ? movie.Runtime
                  : movie.totalSeasons + " Season(s)"}
              </span>
            </div>
            <div className="flex container">
              <span className="opacity-50 w-40">Casts</span>
              <span className="w-full">{movie.Actors}</span>
            </div>
            <div className="flex container">
              <span className="opacity-50 w-40">Country</span>
              <span className="w-full">{movie.Country}</span>
            </div>
          </div>
          {/* Plot */}
          <div className="container mb-10">
            <p className="text-white opacity-90 text-lg text-justify">
              {movie.Plot}
            </p>
          </div>
          {/* Details */}
          <div className="container">
            <h3 className="text-lg text-white opacity-90 font-semibold mb-2">
              Details
            </h3>
            <hr className="border-t-2 border-white opacity-20" />
            <div className="container grid sm:grid-cols-2 gap-x-3 text-md text-white opacity-60 mt-2">
              <span className="mt-1">
                Genre: <i>{movie.Genre}</i>
              </span>
              <span className="mt-1">
                Writers: <i>{movie.Writer}</i>
              </span>
              <span className="mt-1">
                Awards: <i>{movie.Awards}</i>
              </span>
              <span className="mt-1">
                Languages: <i>{movie.Language}</i>
              </span>
              <span className="mt-1">
                Production Company:
                <i>{movie.Type === "movie" ? ` ${movie.Production}` : "-"}</i>
              </span>
              <span className="mt-1">
                Box Office:
                <i>{movie.Type === "movie" ? ` ${movie.BoxOffice}` : "-"}</i>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default MovieDetails;
