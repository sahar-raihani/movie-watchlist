import { useState } from "react";

function App() {
  const [movies, setMovies] = useState([]);

  function addMovie() {
    const newMovie = {
      id: Date.now().toString(),
      title: "Inception",
      genre: "Action",
      watched: false,
    };
    setMovies([...movies, newMovie]);
    }

  return (
    <div>
      <button onClick={addMovie}>
        Add Movie
      </button>

      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            {movie.title} - {movie.genre}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;