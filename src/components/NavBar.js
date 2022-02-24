import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div id="nav-bar">
      <Link to="/pokemons">
        <button id="pokemons">Pokemons</button>
      </Link>
      <Link to="/teams">
        <img
          alt="pokeball"
          src="https://pngimg.com/uploads/pokeball/pokeball_PNG21.png"
        />
      </Link>
      <Link to="/pokemons/new">
        <button id="teams">PokeForm</button>
      </Link>
    </div>
  );
}

export default NavBar;
