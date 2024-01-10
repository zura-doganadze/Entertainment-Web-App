import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import FullContent from "./Components/FullContent";

import data from "./data.json";
import Trending from "./Components/Trending";

function App() {
  const [movies, setMovies] = useState<TMovie[]>(data);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("logined") === "true") {
      navigate("/home");
    } else {
      navigate("/login")
    }
   }, []);
  return (
    <Routes>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route
        path="/:filmNav"
        element={
          <FullContent movies={movies}>
            <Trending movies={movies} />
          </FullContent>
        }
      ></Route>
    </Routes>
  );
}

export default App;
