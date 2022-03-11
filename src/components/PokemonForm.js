import React from "react";

const PokemonForm = (props) => {
  return (
    <div>
      <form>
        <h3>Make your own pokemon!</h3>
        <div>
          <label htmlFor="name">Name: </label>
          <input id="name" />
        </div>
        <div>
          <label htmlFor="type">Type: </label>
          <input id="type" />
        </div>
        <div>
          <label htmlFor="weight">Weight: </label>
          <input id="weight" />
        </div>
        <div>
          <label htmlFor="front_image">Front Image: </label>
          <input id="front_image" />
        </div>
        <div>
          <label htmlFor="back_image">Back Image: </label>
          <input id="back_image" />
        </div>
        <div>
          <button>Create a Pokemon</button>
        </div>
      </form>
      <div>
        <button onClick={() => props.goBack()}>GO BACK</button>
      </div>
    </div>
  );
};

export default PokemonForm;
