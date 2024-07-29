import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function Movie() {

  const [movie, setMovie] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${id}`)
    .then(res => res.json())
    .then(data => setMovie(data))
    .catch(error => console.error(error))
  }, [id]);

  if (!movie) return <h1>Loading...</h1>;

  const movieGenres = movie.genres.map((genre, index) => (
    <span key={index}>{genre}</span>
  ));

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>{movie.title}</h1>
        <p>{movie.time}</p>
        <div>{movieGenres}</div>
      </main>
    </>
  );
};

export default Movie;
