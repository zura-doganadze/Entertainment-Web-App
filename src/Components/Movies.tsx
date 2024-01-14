import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

//img
import MoviesImg from "/assets/icon-nav-movies.svg";
import seriesImg from "/assets/icon-nav-tv-series.svg";
import SaveFalseIcon from "../assets/Trending-img/SaveFalse-icon.png";
import SaveTrueIcon from "../assets/Trending-img/SaveTrue-icon.png";
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
            <MoviesWrapper key={index}>
              <MovieContent>
                <MovieImg src={movie.thumbnail.regular.large} alt="img" />
                <MovieDetails>
                  <span>{movie.year}</span>
                  <Point></Point>
                  <img
                    src={movie?.category === "Movie" ? MoviesImg : seriesImg}
                    alt=""
                  />
                  <span>{movie.category}</span>
                  <Point></Point>
                  <span>{movie.rating}</span>
                </MovieDetails>
                <h5>{movie.title}</h5>
              </MovieContent>
              <SaveImgContainer>
                <img
                  src={movie.isBookmarked ? SaveTrueIcon : SaveFalseIcon}
                  alt=""
                />
              </SaveImgContainer>
            </MoviesWrapper>
          );
        })}
      </Wrapper>

      {/* <button
        onClick={() => {
          localStorage.setItem("logined", JSON.stringify(false));
          navigate("/login");
        }}
      >
        logut
      </button> */}
    </Main>
  );
}

export default Movies;

const Main = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-top: 20px;
  h1 {
    color: #fff;
    font-size: 32px;
    margin-bottom: 32px;
  }
`;
const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 2fr);
  column-gap: 40px;
  row-gap: 32px;
`;
const MoviesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const MovieImg = styled.img`
  width: 100%;

  border-radius: 8px;
  max-height: 230px;
  cursor: pointer;
`;
const MovieContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  div {
    column-gap: 12px;
    color: var(--Pure-White, #fff);
    font-size: 15px;
  }
  h5 {
    color: var(--Pure-White, #fff);
    font-size: 24px;
  }
  img {
    color: #fff;
    /* filter: brightness(3); */
  }
`;
const MovieDetails = styled.div`
  display: flex;
  align-items: center;
  opacity: 0.75;
  margin-top: 8px;
`;
const Point = styled.div`
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background-color: #fff;
  opacity: 0.5;
`;
const SaveImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 5%;
  right: 5%;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #5a698f;
  cursor: pointer;
  &:hover {
    background-color: #fff;
    img {
      filter: brightness(0);
    }
  }
`;
