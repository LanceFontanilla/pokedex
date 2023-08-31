import { AppState } from "../AppState.js"
import { sandboxPokemonsService } from "../services/SandboxPokemonsService.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"


function _drawMyPokemonList() {
    const pokemon = AppState.myPokemon
    let listContent = ''
    pokemon.forEach(p => listContent += p.ListTemplate)
    setHTML('my-pokemon', listContent)
}




export class SandboxPokemonsController {

    constructor() {
        console.log('sandbox controller')
        AppState.on('user', this.getMyPokemon)
        AppState.on('myPokemon', _drawMyPokemonList)
    }

    async catchPokemon() {
        try {
            await sandboxPokemonsService.catchPokemon()
        } catch (error) {
            Pop.error(error)
            console.log(error)
        }

    }

    async getMyPokemon() {
        try {
            await sandboxPokemonsService.getMyPokemon()
        } catch (error) {
            Pop.error(error)
        }
    }

    async setActivePokemon(name) {
        try {
            await sandboxPokemonsService.setActivePokemon(name)
        } catch (error) {
            Pop.error(error)
        }
    }



}