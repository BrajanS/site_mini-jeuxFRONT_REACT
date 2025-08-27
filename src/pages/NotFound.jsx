import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div id="notFound">
      <h2>ERROR 404: This page doesn't exist.</h2>
      <Link to={"/"}>Go to Home page</Link>
    </div>
  );
}
