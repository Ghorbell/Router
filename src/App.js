import "./App.css";
import React, { useState } from "react";
import MovieList from "./Components/MovieList";
import NavBar from "./Components/NavBar";
import { movieData } from "./movieData";

import AddMovie from "./Components/AddMovie";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import MovieDetails from "./Components/MovieDetails";

function App() {
  const [movies, setMovies] = useState(movieData);
  const handleAdd = (form) => {
    setMovies([...movies, form]);
  };

  const [search, setSearch] = useState("");
  const handleSearch = (input) => {
    setSearch(input);
  };

  const [rate, setRate] = useState(0);
  const handleRate = (rating) => {
    setRate(rating);
  };
  console.log(movies.rating >= rate);
  console.log(movies.rating, rate);
  return (
    <div className="App">
      <NavBar handleRate={handleRate} handleSearch={handleSearch} />
      
      <Router>
        <Switch>
          <div className="main">
            <Route
              path="/"
              exact
              render={(props) => (
                <MovieList
                  {...props}
                  movies={movies.filter(
                    (elt) =>
                      elt.name
                        .toLowerCase()
                        .includes(search.toLowerCase().trim()) &&
                      elt.rating >= rate
                  )}
                />
              )}
            />
            <Route
              path="/moviedetails/:id"exact
              render={(props) => <MovieDetails {...props} movies={movies} />}
            />
             <Route
            path="/addmovie" exact
            render={(props) => <AddMovie {...props} handleAdd={handleAdd} />}
          />
          </div>
         </Switch>
      </Router>
    </div>
  );
}

export default App;
