export class Pokemon {
  constructor(
    private _name: string,
    private _pokemonNumber: number,
    private readonly type: string[]
  ) {}

  toString(): string {
    return `${this.name} is the ${
      this.pokemonNumber
    } pokemon of the pokedex. It is a ${this.type.join(" and ")} type pokemon.`
  }

  public get name(): string {
    return this._name
  }

  public set name(value: string) {
    if (value.length < 3)
      throw new Error("Name must be at least 3 characters long")
    if (value.length > 50)
      throw new Error("Name must be less than 50 characters long")
    this._name = value
  }

  get pokemonNumber(): number {
    return this._pokemonNumber
  }

  public set pokemonNumber(newNumber: number) {
    if (newNumber < 1 || newNumber > 151) {
      throw new Error("This number does not belong to the kanto pokedex")
    }
    this._pokemonNumber = newNumber
  }
}
