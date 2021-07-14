import { Pokemon } from "./interfaces/pokemon";
import { InMemoryDatabase } from "./models/in-memory-database";

const pokemonDB = new InMemoryDatabase<Pokemon>();
pokemonDB.set({
    id: 'Bulbasaur',
    attack: 50,
    defense: 10
});

console.log(pokemonDB.get('Bulbasaur'));
