import { Pokemon } from "./Pokemon"

const bulbasaur: Pokemon = new Pokemon("bulbasaur", 1, ["grass", "poison"])
bulbasaur.name = "bulbi"
bulbasaur.pokemonNumber = 1

console.log(bulbasaur.toString())
