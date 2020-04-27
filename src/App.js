import React from "react";
import Pokemon from "./Pokemon";
import Title from "./Title";

const pokemons = [
  {
    name: "Charizard",
    weight: 90,
    awesome: true,
    abilities: ["Blaze", "Solar power", "Tough claws", "Drought"],
  },
  {
    name: "Bulbasaur",
    weight: 6.9,
    awesome: true,
    abilities: ["Overgrow", "Chlorophyll"],
  },
  {
    name: "Mega beedrill",
    weight: 65,
    awesome: false,
    abilities: ["Intimidate", "Unnerve"],
  },
  {
    name: "Mewtwo",
    weight: 122,
    awesome: true,
    abilities: ["Pressure", "Unnerve", "Steadfast", "Insomnia"],
  },
];
function App() {
  return (
    <main className="container">
      <Title />
      <div className="row">
        {pokemons.map((pokemon) => (
          <div className="col-md-6 col-lg-4 cardEffect">
            <Pokemon
              name={pokemon.name}
              weight={pokemon.weight}
              awesome={pokemon.awesome}
              abilities={pokemon.abilities}
            />
          </div>
        ))}
      </div>
    </main>
  );
}

export default App;
