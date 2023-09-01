import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const { id } = useParams();

  const fetchMovieDetails = async () => {
    const response = await fetch(
      `http://www.omdbapi.com/?i=${id}&apikey=1305cb03`
    );
    const data = await response.json();
    setMovieDetails(data);
  };

  useEffect(() => {
    fetchMovieDetails().catch((err) => console.error("Fetch failed", err));
  }, [id]);

  return (
    <div className="sm:flex my-10">
      <div className="sm:mr-4">
        <img
          className="mx-auto rounded shadow-sm"
          src={movieDetails.Poster}
          alt="Poster"
        />
      </div>
      <div className="mt-2 text-center sm:text-left sm:w-8/12">
        <h1 class="text-4xl font-bold mb-4">{movieDetails.Title}</h1>
        <div class="text-lg leading-relaxed">
          <p>
            <strong>Tür:</strong> {movieDetails.Genre}
          </p>
          <p>
            <strong>Süre:</strong> {movieDetails.Runtime}
          </p>
          <p>
            <strong>Yönetmen:</strong> {movieDetails.Director}
          </p>
          <p>
            <strong>Oyuncular:</strong> {movieDetails.Actors}
          </p>
          <p>
            <strong>IMDB Puanı:</strong> {movieDetails.imdbRating}
          </p>
          <p>
            <strong>Yıl:</strong> {movieDetails.Year}
          </p>
          <p>
            <strong>Ülke:</strong> {movieDetails.Country}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
