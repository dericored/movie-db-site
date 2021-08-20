const Loader = () => {
  return (
    <div className="container flex items-center justify-center mt-5">
      <div className="container rounded-full bg-gray-600 w-3 h-3 animate-pulse mr-2 filter drop-shadow-gray-sm"></div>
      <div className="container rounded-full bg-gray-400 w-3 h-3 animate-pulse mr-2 filter drop-shadow-gray-sm"></div>
      <div className="container rounded-full bg-gray-200 w-3 h-3 animate-pulse mr-2 filter drop-shadow-gray-sm"></div>
    </div>
  );
};

export default Loader;
