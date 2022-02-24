import React, { Component } from "react";

class PokemonCard extends Component {
  // Return true of false if pokemon has been caught
  caughtPokemon = () => {
    return !!this.props.team.find((pokemon) => pokemon.id === this.props.id);
  };

  componentDidUpdate() {
    console.log("UPDATED");
  } // NORMALLY DO NOT WANT TO SET STATE unless oyu have a conditional that will stop
  // The infinite loop.

  shouldComponentUpdate(nextProps, nextState) {
    // should update if it hasnt been caught and in the next props it has been caught
    // this.props.team <- not in here. nextProps.team <- Is in here
    // If we want to update the last statement must return true
    // true        &&                  //true               ->                true
    return (
      !this.caughtPokemon() &&
      !!nextProps.team.find((pokemon) => pokemon.id === this.props.id)
    );
  }

  render() {
    return (
      <div
        id={`pokemon-card-${this.props.id}`}
        className="card"
        style={{
          backgroundColor: `var(--${this.props.type})`,
          backgroundImage: `var(--${
            this.caughtPokemon() ? "caught" : "unCaught"
          })`,
        }}
      >
        <h3>{this.props.name}</h3>
        <p>Type: {this.props.type}</p>
        <p>Weight: {this.props.weight}</p>
        <button onClick={(e) => this.props.addPokemon(this.props.id)}>
          {this.caughtPokemon() ? "Remove From Team" : "Add To Team"}
        </button>
        <br />
        <img alt={this.props.name + " image"} src={this.props.frontImage} />
      </div>
    );
  }
}

export default PokemonCard;
