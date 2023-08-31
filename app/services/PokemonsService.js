import { AppState } from "../AppState.js";
import { Pokemon } from "../models/Pokemon.js";



const pokeapi = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon',
    timeout: 5000
})



class PokemonsService {

    async getPokemons() {
        const res = await pokeapi.get('?limit=151')
        console.log('GOT POKEMON', res.data);

        AppState.pokemonList = res.data.results
    }

    async getOnePokemon(name) {
        const res = await pokeapi.get(name)
        console.log(res)
        AppState.activePokemon = new Pokemon(res.data)
        console.log(AppState.activePokemon)
    }

}




export const pokemonsService = new PokemonsService()