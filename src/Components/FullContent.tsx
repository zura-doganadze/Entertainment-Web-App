import Header from "./Header";
import { useParams } from "react-router-dom";
import Movies from "./Movies";

interface Movie {
  title: string;
  category: string;
  isBookmarked: boolean;
  isTrending: boolean;
}

interface FullContentProps {
  children: React.ReactNode; // Use React.ReactNode for children
  movies: Movie[];
}

const FullContent = ({ children, movies }: FullContentProps) => {
  const { filmNav } = useParams();

  const filteredMovies =
    filmNav === "home"
      ? movies
      : filmNav === "movies"
      ? movies.filter((movie) => movie.category === "Movie")
      : filmNav === "tv-servies"
      ? movies.filter((movie) => movie.category === "TV Series")
      : filmNav === "bookmarks"
      ? movies.filter((movie) => movie.isBookmarked)
      : [];

  return (
    <div>
      <Header />
      {filmNav === "home" ? children : null}
      <Movies filteredMovies={filteredMovies} />
    </div>
  );
};

export default FullContent;
