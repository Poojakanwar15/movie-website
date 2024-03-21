import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";

import PageNotFound from "./components/PageNotFound";
import MovieDetails from "./components/MovieDetails";
import Favorite from "./components/Favorite";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/movie-detail" Component={MovieDetails} />
          <Route path="/favorite" Component={Favorite} />
          <Route Component={PageNotFound} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
