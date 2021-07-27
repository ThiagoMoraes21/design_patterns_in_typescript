import { Pokemon } from "./interfaces/pokemon";
import { InMemoryDatabase } from "./models/in-memory-database";
import { createDatabase_factory } from "./patterns/factory-pattern/factory";
import { createDatabase_singleton } from "./patterns/singleton-pattern/singleton";

const pokemonDB = new InMemoryDatabase<Pokemon>();
pokemonDB.set({
    id: 'Bulbasaur',
    attack: 50,
    defense: 10
});

console.log(pokemonDB.get('Bulbasaur'));


// FACTORY PATTERN
const PokemonDB_factory = createDatabase_factory<Pokemon>();
const pkmDB = new PokemonDB_factory();
pkmDB.set({
    id: 'Bulbasaur',
    attack: 50,
    defense: 10
});

console.log(pkmDB.get('Bulbasaur'));


//SINGLETON PATTERN
const PokemonDb_singleton = createDatabase_singleton<Pokemon>();
PokemonDb_singleton.instance.set({
    id: 'Bulbasaur',
    attack: 50,
    defense: 10
});
console.log(PokemonDb_singleton.instance.get('Bulbasaur'));
