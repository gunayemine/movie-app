import React, { useEffect, useState } from "react";
import "./App.css";
import MovieList from "./components/MovieList";
import SearchBox from "./components/SearchBox";
import Pagination from "./components/Pagination";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MovieDetails from "./components/MovieDetails";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("Pokemon");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const handleSearchClick = () => {
    getMoviesRequest();
  };

  const getMoviesRequest = async () => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&page=${currentPage}${
      selectedYear ? `&y=${selectedYear}` : ""
    }${selectedType ? `&type=${selectedType}` : ""}&apikey=1305cb03`;

    const response = await fetch(url);

    if (response.ok) {
      const responseJson = await response.json();
      if (responseJson.Search) {
        setMovies(responseJson.Search);
      }
    } else {
      console.error("Failed to fetch movies");
    }
  };

  useEffect(() => {
    getMoviesRequest();
  }, [currentPage, selectedYear, selectedType]);

  return (
    <Router>
      <Header />
      <div className="container app-movie">
        <Routes>
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route
            path="/"
            element={
              <>
                <div class="sm:flex sm:space-x-4 justify-content items-center">
                  <div className="flex sm:w-6/12 w-full rounded align-items mt-4 mb-4">
                    <SearchBox
                      searchValue={searchValue}
                      setSearchValue={setSearchValue}
                    />
                    <button
                      className="bg-cyan-800 hover:bg-cyan-900 text-white py-2 px-4 ml-2 rounded"
                      onClick={handleSearchClick}
                    >
                      Ara
                    </button>{" "}
                    {/* Ara butonu */}
                  </div>

                  <div className="sm:w-6/12 w-full sm:flex items-center">
                    <div className=" text-center year-filter ">
                      <input
                        className="outline-none border border-gray-200 p-2 rounded"
                        type="text"
                        placeholder="Yıl giriniz..."
                        value={selectedYear}
                        onChange={(e) => setSelectedYear(e.target.value)}
                      />
                      <button
                        className="bg-cyan-800 hover:bg-cyan-900 text-white py-2 px-4 ml-2 rounded"
                        onClick={getMoviesRequest}
                      >
                        Filtrele
                      </button>
                    </div>
                  </div>
                  <div class="text-center ">
                    <select
                      className="mt-2 sm:mt-0"
                      onChange={(e) => setSelectedType(e.target.value)}
                    >
                      <option value="">Tüm Türler</option>
                      <option value="movie">Filmler</option>
                      <option value="series">Diziler</option>
                    </select>
                  </div>
                </div>
                <div className="text-center">
                  <MovieList movies={movies} />
                  <Pagination
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                  />
                </div>
              </>
            }
          />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
