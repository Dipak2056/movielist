import React from "react";
import { Button, Card, Col } from "react-bootstrap";

const CustomCard = ({
  movie,
  handleOnAddToList,
  handleOnDelete,
  btnDelete,
}) => {
  const generatedCard = (movie) => {
    return (
      <Card className="movie-card" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={movie.Poster} />
        <Card.Body>
          <Card.Title>{movie.Title}</Card.Title>
          <Card.Text>
            {movie.Director} {movie.Runtime} {movie.Country} {movie.Writer}
          </Card.Text>
          {btnDelete ? (
            <Button
              variant="btn btn-danger w-100"
              onClick={() => handleOnDelete(movie.imdbID)}
            >
              <box-icon name="trash">Delete</box-icon>
            </Button>
          ) : (
            <div className="d-flex justify-content-between">
              <Button
                variant="info"
                onClick={() => handleOnAddToList("Happy", movie)}
              >
                Happy
              </Button>
              <Button
                variant="secondary"
                onClick={() => handleOnAddToList("Sad", movie)}
              >
                Lazy
              </Button>
            </div>
          )}
        </Card.Body>
      </Card>
    );
  };
  return (
    <Col sm="12" md="6" lg="4" xl="3">
      {movie?.Poster && movie?.Title && movie?.imdbRating
        ? generatedCard(movie)
        : ""}
    </Col>
  );
};

export default CustomCard;
