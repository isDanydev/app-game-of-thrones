import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="hero">
        <div className="hero-banner">
          <h1>Juego de Tronos</h1>
          <p>Entre tanta escoria tu eres la peor porque te rendiste.</p>
          <NavLink className=" hero-btn " to="/personajes">
            Personajes
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
