interface Movie {
  title: string;
  // Add other properties of the movie if applicable
}

function Movies({ filteredMovies }: { filteredMovies: Movie[] }) {
  return (
    <div>
      {filteredMovies.map((movie: Movie, index: number) => {
        return <h2 key={index}>{movie.title}</h2>;
      })}
    </div>
  );
}

export default Movies;
