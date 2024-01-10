import { useNavigate } from "react-router-dom";

function Movies({ filteredMovies }: { filteredMovies: TMovie[] | null }) {
  const navigate = useNavigate();
  return (
    <div>
      {filteredMovies?.map((movie: TMovie, index: number) => {
        return <h2 key={index}>{movie.title}</h2>;
      })}
      <button
        onClick={() => {
          localStorage.setItem("logined", JSON.stringify(false));
          navigate("/login");
        }}
      >logut</button>
    </div>
  );
}

export default Movies;
