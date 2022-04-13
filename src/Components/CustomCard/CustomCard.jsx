import React from "react";
import { Button, Card } from "react-bootstrap";

const CustomCard = ({ movie }) => {
  return (
    <div className="card movie-card">
      <Card className="movie-card" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={movie.Poster} />
        <Card.Body>
          <Card.Title>{movie.Title}</Card.Title>
          <Card.Text>
            {movie.Director}, {movie.Runtime} ,{movie.Country}, {movie.Writer}
          </Card.Text>
          <Button variant="primary">Add to List</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CustomCard;
