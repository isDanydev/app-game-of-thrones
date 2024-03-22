import { NavLink } from "react-router-dom";
import logo from "../assets/img/logo.png";
const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="" className="logo" />
      <ul className=" align-items-center gap-2  h-100 p-0 m-0">
        <li className="m-0">
          <NavLink className="navNavlink" to="/">
            Inicio
          </NavLink>
        </li>
        <li className="m-0">
          <NavLink className="navNavlink" to="/personajes">
            Personajes
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
export default Navbar;
