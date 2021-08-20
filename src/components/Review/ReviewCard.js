const ReviewCard = ({ item }) => {
  // takes each fetch response as 'item'
  const { headline, image, url, author } = item;
  return (
    <div className="container flex items-center border border-gray-800 rounded-xl mr-3 max-w-max max-h-48 min-w-max bg-white bg-opacity-5">
      {/* Image */}
      <img
        src={image}
        alt={headline}
        className="max-h-full min-h-full w-auto rounded-xl object-contain"
      />
      {/* Author */}
      <div className="container flex flex-col p-5 max-w-xs justify-between min-h-full">
        <div className="container">
          <h2 className="text-lg text-white font-bold">{headline}</h2>
          <h3 className="text-sm text-white italic mt-2">by {author}</h3>
        </div>
        {/* Link */}
        <a
          href={url}
          className="text-sm text-white opacity-70 font-semibold mt-5 text-right hover:opacity-100"
          target="_blank"
        >
          Read More...
        </a>
      </div>
    </div>
  );
};

export default ReviewCard;
