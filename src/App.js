import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Layout/Navbar";
import { Provider } from "./context";
import Sidebar from "./components/Layout/Sidebar";
import SearchMovies from "./components/Search/SearchMovies";
import MovieDetails from "./components/Details/MovieDetails";
import Trending from "./components/Trending/Trending";
import CriticsReview from "./components/Review/CriticsReview";
import Footer from "./components/Layout/Footer";

function App() {
  return (
    <Provider>
      <Router>
        <div className="App">
          <Navbar />
          <div className="md:flex w-full relative bg-gradient-to-br from-indigo-1000 to-indigo-1000x">
            <Sidebar />
            <Switch>
              <Route exact path="/details/:id" component={MovieDetails} />
              <Route exact path="/trending" component={Trending} />
              <Route exact path="/review" component={CriticsReview} />
              <Route path="/" component={SearchMovies} />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
