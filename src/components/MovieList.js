import React from "react";
import { Link } from "react-router-dom";

const MovieList = (props) => {
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {props.movies.map((movie, index) => (
            <div key={index} className="">
              <div className="flex justify-content items-center">
                <p className="w-6/12 text-sm text-gray-500 rounded py-1">
                  <strong>IMDB ID: </strong>
                  {movie.imdbID}
                </p>
                <p className="w-6/12 rounded bg-gray-100 py-3 text-sm text-gray-70 mb-2">
                  {movie.Year}
                </p>
              </div>
              <Link to={`movie/${movie.imdbID}`}>
                <img
                  className="overflow-hidden mt-2 w-full h-60 sm:h-96 rounded-lg shadow-lg object-cover object-center"
                  src={movie.Poster}
                  alt={movie.Title}
                />
              </Link>
              <div className="p-4">
                <div className="h-16 text-lg font-semibold leading-tight mb-2">
                  <Link
                    className="hover:underline"
                    to={`movie/${movie.imdbID}`}
                  >
                    {movie.Title}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
         
      </div>
        
    </>
  );
};

export default MovieList;
