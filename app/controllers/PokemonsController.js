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
        AppState.on('activePokemon', _drawActivePokemon)

    }

    async getPokemons() {
        try {
            await pokemonsService.getPokemons()
        } catch (error) {
            Pop.error(error)
            console.error(error)
        }
    }

    async getOnePokemon(name) {
        try {
            console.log(name)
            await pokemonsService.getOnePokemon(name)
        } catch (error) {
            Pop.error(error)
            console.log(error)
        }
    }
}

