import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import FullContent from "./Components/FullContent";

import data from "./data.json";
import Trending from "./Components/Trending";

// Define an interface for the movie
interface Movie {
  title: string;
  category: string;
  isBookmarked: boolean;
  isTrending: boolean;
 
  // Add other properties as needed
}

function App() {
  const [movies, setMovies] = useState<Movie[]>(data);

  return (
    <Routes>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route
        path="/:filmNav"
        element={
          <FullContent movies={movies}>
            <Trending movies={movies} />{" "}
          </FullContent>
        }
      ></Route>
    </Routes>
  );
}

export default App;
