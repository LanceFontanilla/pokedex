import { AppState } from "../AppState.js"
import { api } from "./AxiosService.js"
import { Pokemon } from "../models/Pokemon.js"


class SandboxPokemonsService {
    async getMyPokemon() {
        const res = await api.get('api/pokemon')
        console.log('My Caught Pokemon', res.data)
        let myPokemon = res.data.map(p => new Pokemon(p))
        AppState.myPokemon = myPokemon
    }

    async catchPokemon() {
        const pokemon = AppState.activePokemon
        console.log("Catching", pokemon)
        const response = await api.post('api/pokemon', pokemon)
        console.log("Caught", response.data)
        AppState.myPokemon.push(new Pokemon(response.data))
        AppState.emit('myPokemon')
    }
    setActivePokemon(name) {
        let pokemon = AppState.myPokemon.find(p => p.name == name)
        AppState.activePokemon = pokemon
    }

}


export const sandboxPokemonsService = new SandboxPokemonsService()