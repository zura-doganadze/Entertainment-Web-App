import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

 export default function Login() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Login</h1>
      <Link to="/signup">Sign up</Link>
      <Link to="/home">Home</Link>
      <button
        onClick={() => {
          localStorage.setItem("logined", JSON.stringify(true));
          navigate("/home");
        }}
      >
        login
      </button>
     </div>
  );
}
