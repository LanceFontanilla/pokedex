import { AppState } from "../AppState.js";
import { baseURL } from "../env.js";
import { pokeapi } from "../env.js";


class PokemonsService {

    async getPokemons() {
        const res = await pokeapi.get('pokemon?limit=151')
        console.log('GOT POKEMON', res.data);
        AppState.pokemonList = res.data.results
    }

    async getOnePokemon(index) {
        console.log(index);
        const res = await pokeapi.get(`pokemon/${index}`)
        console.log('SINGLE POKEMON', res.data);

    }

}




export const pokemonsService = new PokemonsService()