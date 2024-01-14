import Header from "./Header";
import { useParams } from "react-router-dom";
import Movies from "./Movies";

import styled from "styled-components";

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
      : filmNav === "tv-series"
      ? movies.filter((movie: TMovie) => movie.category === "TV Series")
      : filmNav === "bookmarks"
      ? movies.filter((movie: TMovie) => movie.isBookmarked)
      : null;

  return (
    <Main>
      <Header />
      <ContentWrapper>
        {filmNav === "home" ? children : null}
        <Movies filteredMovies={filteredMovies} />
      </ContentWrapper>
    </Main>
  );
};

export default FullContent;

const Main = styled.div`
  display: flex;
`;
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-right: 40px;
`;
