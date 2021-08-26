import React from 'react'
import { Link } from 'react-router-dom';
import MovieCard from './MovieCard';

const MovieList = ({movies}) => {
    return (
      <div>
        <Link to="/addmovie">
          <h1>Add Movie</h1>
        </Link>
        <div className="movie-list">
          {movies.map((elmt) => (
            <MovieCard film={elmt} />
          ))}
        </div>
      </div>
    );
}

export default MovieList

