import ReviewList from "./ReviewList";

const ReviewColumn = ({ name, logo, searchResults }) => {
  // takes company's name, logo and fetch responses
  if (searchResults === undefined || searchResults.length === 0) {
    return <div></div>;
  } else {
    return (
      <div className="flex flex-col justify-start mt-10 transition-width w-full min-h-max filter drop-shadow-gray-sm">
        <div className="container flex my-2 justify-start items-center">
          {/* Company Logo */}
          <img src={logo} alt={name} className="bg-white rounded-xl w-7 p-1" />
          {/* Company Name */}
          <h3 className="text-xl text-white font-semibold ml-3 cursor-default">
            {name}
          </h3>
        </div>
        <hr className="border-t-2 opacity-30" />
        {/* show a list of search results */}
        <ReviewList searchResults={searchResults} />
      </div>
    );
  }
};

export default ReviewColumn;
