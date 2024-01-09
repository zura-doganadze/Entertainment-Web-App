interface Movie {
  title: string;
  category: string;
  isBookmarked: boolean;
  isTrending: boolean;
}

function Trending({ movies }: { movies: Movie[] }) {
  const trendingMovies = movies.filter((movie: Movie) => movie.isTrending);
  return (
    <div>
      {trendingMovies.map((movie: Movie, index: number) => {
        return <h2 key={index}>trending: {movie.title}</h2>;
      })}
      <h1>trending</h1>
    </div>
  );
}

export default Trending;
