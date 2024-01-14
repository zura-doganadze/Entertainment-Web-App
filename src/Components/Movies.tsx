import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

import MoviesImg from "/assets/icon-nav-movies.svg";
import seriesImg from "/assets/icon-nav-tv-series.svg";
function Movies({ filteredMovies }: { filteredMovies: TMovie[] | null }) {
  const navigate = useNavigate();
  const { filmNav } = useParams();

  // console.log(filmNav === "home"
  //     ? movies
  //     : filmNav === "movies"
  //     ? movies.filter((movie: TMovie) => movie.category === "Movie")
  //     : filmNav === "tv-series"
  //     ? movies.filter((movie: TMovie) => movie.category === "TV Series")
  //     : filmNav === "bookmarks"
  //     ? movies.filter((movie: TMovie) => movie.isBookmarked)
  //     : null;)
  return (
    <Main>
      <h1>
        {filmNav === "home"
          ? "Recommended for you"
          : filmNav === "movies"
          ? "Movies"
          : filmNav === "tv-series"
          ? "TV Series"
          : filmNav === "bookmarks"
          ? "Bookmarked Movies"
          : null}
      </h1>
      <Wrapper>
        {filteredMovies?.map((movie: TMovie, index: number) => {
          return (
            <Container key={index}>
              <img src={movie.thumbnail.regular.large} alt="img" />
              <h2>{movie.title}</h2>
              <img
                src={movie?.category === "Movie" ? MoviesImg : seriesImg}
                alt=""
              />
            </Container>
          );
        })}
      </Wrapper>

      <button
        onClick={() => {
          localStorage.setItem("logined", JSON.stringify(false));
          navigate("/login");
        }}
      >
        logut
      </button>
    </Main>
  );
}

export default Movies;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
    color: red;
  }
`;
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 2fr);
`;
const Container = styled.div`
  display: flex;
`;
