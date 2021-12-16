import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav>
      <Link to="/">
        <img
          alt="logo"
          src="https://media.wired.co.uk/photos/606d9ea2ef15037f58853565/master/w_1600,c_limit/ponyo.jpg"
        />
      </Link>
      <ul>
        <li>
          <Link to="/movies">Movies</Link>
        </li>
        <li>
          <Link to="/people">People</Link>
        </li>
        <li>
          <Link to="/locations">Locations</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
