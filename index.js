"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Pokemon_1 = require("./Pokemon");
const bulbasaur = new Pokemon_1.Pokemon("bulbasaur", 1, ["grass", "poison"]);
bulbasaur.name = "bulbi";
bulbasaur.pokemonNumber = 1;
console.log(bulbasaur.toString());
