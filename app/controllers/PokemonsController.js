import { AppState } from "../AppState.js"
import { Pokemon } from "../models/Pokemon.js"
import { pokemonsService } from "../services/PokemonsService.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"



function _drawActivePokemon() {
    let activePokemon = AppState.activePokemon
    if (activePokemon) {
        setHTML('active-pokemon', activePokemon.activeTemplate)
    }
}

function _drawPokemonsList() {
    let pokemons = AppState.pokemonList
    let listContent = ''
    pokemons.forEach(p => listContent += Pokemon.PokemonListTemplate(p))
    setHTML('pokemon-list', listContent)
}



export class PokemonsController {
    constructor() {
        this.getPokemons()
        AppState.on('pokemonList', _drawPokemonsList)

    }

    async getPokemons() {
        try {
            await pokemonsService.getPokemons()
        } catch (error) {
            Pop.error(error)
            console.error(error)
        }
    }

    async getOnePokemon(index) {
        try {
            console.log(index);
            await pokemonsService.getOnePokemon(index)
        } catch (error) {
            Pop.error(error)
            console.error(error)
        }
    }
}


