import Header from "./Header";
import { useParams } from "react-router-dom";
import Movies from "./Movies";

interface FullContentProps {
  children: React.ReactNode;
  movies: TMovie[];
}

const FullContent = ({ children, movies }: FullContentProps) => {
  const { filmNav } = useParams();

  const filteredMovies =
    filmNav === "home"
      ? movies
      : filmNav === "movies"
      ? movies.filter((movie: TMovie) => movie.category === "Movie")
      : filmNav === "tv-servies"
      ? movies.filter((movie: TMovie) => movie.category === "TV Series")
      : filmNav === "bookmarks"
      ? movies.filter((movie: TMovie) => movie.isBookmarked)
      : null;

  return (
    <div>
      <Header />
      {filmNav === "home" ? children : null}
      <Movies filteredMovies={filteredMovies} />
    </div>
  );
};

export default FullContent;
