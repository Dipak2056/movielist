import { useState } from "react";
import "./App.css";
import MovieList from "./Components/MovieList/MovieList";
import SearchForm from "./Components/SearchForm/SearchForm";

function App() {
  const [movieList, setMovieList] = useState([]);
  const handleOnAddToList = (cat, movie) => {
    const obj = { cat, ...movie };
    setMovieList([...movieList, obj]);
    console.log(movieList);
  };
  return (
    <div className="App">
      <div className="container">
        <h1>My movie collection</h1>
      </div>
      <div className="container main">
        <SearchForm handleOnAddToList={handleOnAddToList} />
      </div>
      <div className="container">
        <MovieList movieList={movieList} />
      </div>
    </div>
  );
}

export default App;
