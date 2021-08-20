import { useState } from "react";

const SearchReview = ({ setSearchResults, setIsLoading }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const reviewContainer = {};

  const handleSubmit = (e) => {
    setSearchResults([]);
    e.preventDefault();
    setIsLoading(true);

    // fetch from nyt
    fetch(
      `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${searchTerm}&api-key=CODDgSIiEWAMxn4mnv1kJAQQgGAtHAM9`
    )
      .then((res) => res.json())
      .then((data) => {
        // reformat response
        const reviews = data.results.map((review) => {
          let reformatted = {};
          reformatted["headline"] = review.headline;
          reformatted["author"] = review.byline;
          reformatted["url"] = review.link.url;
          reformatted["image"] = review.multimedia
            ? review.multimedia.src
            : "https://taobe.boutique/wp-content/uploads/2019/05/NYT-logo.jpg";
          return reformatted;
        });
        reviewContainer["nyt"] = reviews;

        // 2nd fetch from the guardian
        return fetch(
          `https://content.guardianapis.com/search?q=${searchTerm}&format=json&tag=film/film,tone/reviews&show-tags=contributor&show-fields=starRating,headline,thumbnail,short-url&order-by=relevance&api-key=9704bda8-3aaf-4a19-80ad-782c88b28cb1`
        );
      })
      .then((res) => res.json())
      .then((data) => {
        // reformat response
        const reviews = data.response.results.map((review) => {
          let reformatted = {};
          reformatted["headline"] = review.webTitle;
          reformatted["author"] = review.tags[0].webTitle;
          reformatted["url"] = review.webUrl;
          reformatted["image"] = review.fields.thumbnail
            ? review.fields.thumbnail
            : "https://rxart.net/wp-content/uploads/2021/03/the-guardian-logo.jpg";
          return reformatted;
        });
        reviewContainer["guardian"] = reviews;
        setSearchResults(reviewContainer);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    // search bar
    <div className="relative flex flex-col my-5">
      <div className="flex justify-center">
        <form onSubmit={handleSubmit}>
          <input
            className="w-80 bg-white h-10 px-5 pr-16 filter drop-shadow-white-sm rounded-full text-sm transform focus:outline-none focus:scale-105 duration-200 focus:border-opacity-100 border-2 border-yellow-400 border-opacity-0 hover:border-opacity-100"
            type="text"
            name="searchTerm"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleChange}
            autoComplete="off"
          />
          <button
            type="submit"
            className="absolute top-3 mr-4 transform -translate-x-7"
          >
            <svg
              className="text-gray-600 h-4 w-4 fill-current"
              xmlns="https://www.w3.org/2000/svg"
              xmlnsXlink="https://www.w3.org/1999/xlink"
              version="1.1"
              id="Capa_1"
              x="0px"
              y="0px"
              viewBox="0 0 56.966 56.966"
              style={{ enableBackground: "new 0 0 56.966 56.966" }}
              xmlSpace="preserve"
              width="512px"
              height="512px"
            >
              <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchReview;
