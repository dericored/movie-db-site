import ReviewCard from "./ReviewCard";

const ReviewList = ({ searchResults }) => {
  if (searchResults === undefined || searchResults.length === 0) {
    return <div></div>;
  } else {
    return (
      <>
        <div className="flex justify-start py-3 overflow-x-scroll overflow-y-hidden">
          {/* display each individual search result */}
          <div className="flex container">
            {searchResults.map((item) => (
              <ReviewCard key={item.url} item={item} />
            ))}
          </div>
        </div>
      </>
    );
  }
};

export default ReviewList;
