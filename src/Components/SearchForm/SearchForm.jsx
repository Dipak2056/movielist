import React, { useState } from "react";
import CustomCard from "../CustomCard/CustomCard";
import { fetchMovie } from "../../Helper/axiosHelper";
const SearchForm = ({ handleAddToList }) => {
  const [search, setSearch] = useState("");
  const [movie, setMovie] = useState({});

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const movie = await fetchMovie(search);
    setMovie(movie.data);
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} /> <span></span>
        <button>Search</button>
      </form>
      <CustomCard movie={movie} handleAddToList={handleAddToList} />
    </div>
  );
};

export default SearchForm;
