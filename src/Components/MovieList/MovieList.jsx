import React from "react";
import CustomCard from "../CustomCard/CustomCard";

const MovieList = ({ movieList }) => {
  return (
    <div>
      <h1>all movie list goes here</h1>
      <button>All</button>
      <button>sad</button>
      <button>happy</button>
      {movieList.map((movie, index) => {
        return <CustomCard movie={movie} key={index} />;
      })}
    </div>
  );
};

export default MovieList;
