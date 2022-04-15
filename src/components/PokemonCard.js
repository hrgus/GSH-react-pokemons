import React, { Component } from "react";

function PokemonCard(props) {
  // Return true of false if pokemon has been caught
  const caughtPokemon = () => {
    return !!props.team.find((pokemon) => pokemon.id === props.id);
  };

  // Need to convert to use React.memo

  // shouldComponentUpdate(nextProps, nextState) {
  //   // should update if it hasn't been caught and in the next props it has been caught
  //   // this.props.team <- not in here. nextProps.team <- Is in here
  //   // If we want to update the last statement must return true
  //   // true        &&                  //true               ->                true
  //   return (
  //     !this.caughtPokemon() &&
  //     !!nextProps.team.find((pokemon) => pokemon.id === this.props.id)
  //   );
  // }

  return (
    <div
      id={`pokemon-card-${props.id}`}
      className="card"
      style={{
        backgroundColor: `var(--${props.type})`,
        backgroundImage: `var(--${caughtPokemon() ? "caught" : "unCaught"})`,
      }}
    >
      <h3>{props.name}</h3>
      <p>Type: {props.type}</p>
      <p>Weight: {props.weight}</p>
      <button onClick={(e) => props.addPokemon(props.id)}>
        {caughtPokemon() ? "Remove From Team" : "Add To Team"}
      </button>
      <br />
      <img alt={props.name + " image"} src={props.frontImage} />
    </div>
  );
}
export default PokemonCard;
