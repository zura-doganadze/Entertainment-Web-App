import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div>
      <h1>Login</h1>
      <Link to="/signup">Sign up</Link>
      <Link to="/home">Home</Link>
    </div>
  );
}
