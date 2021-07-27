import { createDatabase } from "./factory-pattern/factory";
import { Pokemon } from "./interfaces/pokemon";
import { InMemoryDatabase } from "./models/in-memory-database";

const pokemonDB = new InMemoryDatabase<Pokemon>();
pokemonDB.set({
    id: 'Bulbasaur',
    attack: 50,
    defense: 10
});

console.log(pokemonDB.get('Bulbasaur'));


// FACTORY PATTERN
const PokemonDB = createDatabase<Pokemon>();
const pkmDB = new PokemonDB();
pkmDB.set({
    id: 'Bulbasaur',
    attack: 50,
    defense: 10
});

console.log(pkmDB.get('Bulbasaur'));