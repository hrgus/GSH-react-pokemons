import React, { Component } from "react";

export default class TeamPokemon extends Component {
  state = {
    image: "back_image",
  };

  changeImage = (e) => {
    // oonly change image if its this key,

    this.setState(
      (prevState) => {
        const currentImage =
          prevState.image === "back_image" ? "front_image" : "back_image";

        return { image: currentImage };
      },
      () => console.log(this.state)
    );
  };

  render() {
    return (
      <div className="card">
        <p>Name: {this.props.pokemon.name}</p>
        <p>Type: {this.props.pokemon.poke_type}</p>

        <img
          alt={this.props.pokemon.name}
          onMouseEnter={this.changeImage}
          onMouseLeave={this.changeImage}
          src={this.props.pokemon[this.state.image]}
        />
      </div>
    );
  }
}
