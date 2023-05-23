"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pokemon = void 0;
class Pokemon {
    constructor(_name, _pokemonNumber, type) {
        this._name = _name;
        this._pokemonNumber = _pokemonNumber;
        this.type = type;
    }
    toString() {
        return `${this.name} is the ${this.pokemonNumber} pokemon of the pokedex. It is a ${this.type.join(" and ")} type pokemon.`;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        if (value.length < 3)
            throw new Error("Name must be at least 3 characters long");
        if (value.length > 50)
            throw new Error("Name must be less than 50 characters long");
        this._name = value;
    }
    get pokemonNumber() {
        return this._pokemonNumber;
    }
    set pokemonNumber(newNumber) {
        if (newNumber < 1 || newNumber > 151) {
            throw new Error("This number does not belong to the kanto pokedex");
        }
        this._pokemonNumber = newNumber;
    }
}
exports.Pokemon = Pokemon;
