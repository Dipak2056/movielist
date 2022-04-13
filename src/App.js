import "./App.css";
import MovieList from "./Components/MovieList/MovieList";
import SearchForm from "./Components/SearchForm/SearchForm";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>My movie collection</h1>
      </div>
      <div className="container main">
        <SearchForm />
      </div>
      <div className="container">
        <MovieList />
      </div>
    </div>
  );
}

export default App;
