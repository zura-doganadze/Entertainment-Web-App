import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function Movies({ filteredMovies }: { filteredMovies: TMovie[] | null }) {
  const navigate = useNavigate();
  return (
    <Main>
      {filteredMovies?.map((movie: TMovie, index: number) => {
        return <h2 key={index}>{movie.title}</h2>;
      })}
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
`;
