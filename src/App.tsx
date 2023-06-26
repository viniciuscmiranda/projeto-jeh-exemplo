import { useState, useEffect } from "react";
import { Movie } from "./types/Movie";
import { MovieCard } from "./components/MovieCard";

export function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    const movies: Movie[] = [
      {
        id: 1,
        name: "O Poderoso Chefão",
      },
      {
        id: 2,
        name: "Tudo em Todo Lugar ao Mesmo Tempo",
      },
      {
        id: 3,
        name: "Homem-Aranha: Através do Aranhaverso",
      },
    ];

    setMovies(movies);
  }, []);

  function addMovie() {
    const newMovies = [...movies];
    newMovies.push({
      id: newMovies.length + 1,
      name: inputText,
    });

    setMovies(newMovies);
  }

  function onRemove(movieId: number) {
    const newMovies = movies.filter((movie) => {
      return movie.id !== movieId;
    });

    setMovies(newMovies);
  }

  return (
    <div>
      {movies.map((movie) => {
        return (
          <MovieCard
            onRemove={() => onRemove(movie.id)}
            key={movie.id}
            movie={movie}
          />
        );
      })}

      <input onChange={(e) => setInputText(e.target.value)} value={inputText} />
      <button onClick={addMovie}>Adicionar filme</button>
    </div>
  );
}
