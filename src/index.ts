import { Pokemon } from "./interfaces/pokemon";
import { InMemoryDatabase } from "./models/in-memory-database";
import { createDatabase_factory } from "./patterns/factory-pattern/factory";
import { createDatabase_observable } from "./patterns/observer-pattern/observable";
import { createDatabase_singleton } from "./patterns/singleton-pattern/singleton";

const pokemonDB = new InMemoryDatabase<Pokemon>();
pokemonDB.set({
    id: 'Bulbasaur',
    attack: 50,
    defense: 10
});

console.log('Regular Implementation:', pokemonDB.get('Bulbasaur'));


// FACTORY PATTERN
const PokemonDB_factory = createDatabase_factory<Pokemon>();
const pkmDB = new PokemonDB_factory();
pkmDB.set({
    id: 'Bulbasaur',
    attack: 50,
    defense: 10
});

console.log('Factory Pattern:', pkmDB.get('Bulbasaur'));


//SINGLETON PATTERN
const PokemonDb_singleton = createDatabase_singleton<Pokemon>();
PokemonDb_singleton.instance.set({
    id: 'Bulbasaur',
    attack: 50,
    defense: 10
});
console.log('Singleton Pattern:', PokemonDb_singleton.instance.get('Bulbasaur'));


//OBSERVER PATTERN
const PokemonDb_observable = createDatabase_observable<Pokemon>();
const unsubscribe = PokemonDb_observable.instance.onAfterAdd(({ value }) => {
    console.log('Observable Pattern:', value);
});

PokemonDb_observable.instance.set({
    id: 'Bulbasaur',
    attack: 50,
    defense: 10
});

unsubscribe();

PokemonDb_observable.instance.set({
    id: 'Spinosaur',
    attack: 100,
    defense: 20
});

