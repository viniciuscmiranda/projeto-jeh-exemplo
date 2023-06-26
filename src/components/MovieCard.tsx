import { Movie } from "../types/Movie";
import {
  MovieCardContainer,
  MovieTitle,
  RemoveButton,
} from "./MovieCard.styles";

export function MovieCard({ movie, onRemove }: MovieCardProps) {
  return (
    <MovieCardContainer>
      <MovieTitle>{movie.name}</MovieTitle>
      <RemoveButton onClick={onRemove}>X</RemoveButton>
    </MovieCardContainer>
  );
}

type MovieCardProps = {
  movie: Movie;
  onRemove: () => void;
};
