import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../images/logo.jpg";

const Header = () => {
  return (
    <div>
      <Link to="/" className="header">
        <img className="image" src={logo} alt="logo" />
        <span className="title">ChampionQuiz</span>
      </Link>
      <hr className="divider" />
    </div>
  );
};

export default Header;
