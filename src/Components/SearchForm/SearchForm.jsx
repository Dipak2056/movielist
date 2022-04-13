import React, { useState } from "react";
import CustomCard from "../CustomCard/CustomCard";
import { fetchMovie } from "../../Helper/axiosHelper";
const SearchForm = () => {
  const [search, setSearch] = useState("");
  const [movie, setMovie] = useState({});

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const movie = await fetchMovie(search);
    setMovie(movie.data);
    console.log(movie);
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} /> <span></span>
        <button>Search</button>
      </form>
      <CustomCard movie={movie} />
    </div>
  );
};

export default SearchForm;
