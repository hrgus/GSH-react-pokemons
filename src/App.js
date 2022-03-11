import React, { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import PokemonsContainer from "./containers/PokemonsContainer";
import TeamContainer from "./containers/TeamContainer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// difference functional component* and class component
// Access to lifecycle methods only class components have access to them*
// functional components dont have state, unless we use hooks

const App = () => {
  const [global, setGlobal] = useState({
    pokemons: [],
    team: [],
    signedIn: true,
  });

  useEffect(() => {
    fetch("http://localhost:3001/pokemons")
      .then((resp) => resp.json())
      .then((json) => {
        setGlobal({
          ...global,
          pokemons: json,
        });
      })
      .catch((e) => console.log(e));
  }, []);

  const runAway = () => {
    setGlobal({
      ...global,
      team: [],
    });
  };

  const addPokemon = (id) => {
    // Find the pokemon that we want add
    const foundPokemon = global.pokemons.find((pokemon) => pokemon.id === id);
    // set state and add the pokemon into the team
    if (global.team.find((pokemon) => pokemon.id === id)) {
      console.log("REMOVE THE POKEMON FROM TEAM");
      setGlobal({
        ...global,
        team: global.team.filter((pokemon) => {
          return pokemon.id !== id;
        }),
      });
    } else {
      // console.log("ADD POKEMON TO TEAM")

      setGlobal((prevGlobal, prevProps) => ({
        ...prevGlobal,
        team: [...prevGlobal.team, foundPokemon],
      }));
    }
  };

  return (
    <div className="App">
      <Router>
        {/* If you want navbar to go away change state of signedin */}
        {global.signedIn ? <NavBar /> : false}
        <Switch>
          <Route
            path="/pokemons"
            component={() => {
              const pokemonContainerJSX = (
                <PokemonsContainer
                  team={global.team}
                  addPokemon={addPokemon}
                  pokemons={global.pokemons}
                />
              );
              return global.pokemons.length > 0 ? (
                pokemonContainerJSX
              ) : (
                <h1>Loading....</h1>
              );
            }}
          />

          <Route
            exact
            path="/teams"
            component={() => (
              <TeamContainer runAway={runAway} team={global.team} />
            )}
          />

          <Route path="/" render={() => <h1>ROUTE DOES NOT EXIST!</h1>} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
