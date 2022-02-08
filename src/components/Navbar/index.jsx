import { Link } from "react-router-dom";
import "../Navbar/navbar.css";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">L'agence</Link>
      <Link to="/works">Projets</Link>
    </nav>
  );
};

export default Navbar;
