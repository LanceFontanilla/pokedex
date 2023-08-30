


export class Pokemon {
    constructor(data) {
        this.name = data.name
        this.nickName = data.nickName
        this.img = data.img
        this.weight = data.weight
        this.height = data.height
        this.types = data.types

        this.creatorID = data.creatorID



    }


    get activeTemplate() {
        return `
                <div class="card p-3 sticky-top">
        <div class="d-flex justify-content-between">
          <h1 class="text-success">${this.name}</h1>
    
        </div>
 
        
        
        `

    }


    static PokemonListTemplate(pokemons) {
        return `
        <p class ="selectable text-light py-1 rounded mb-0" onclick="app.PokemonsController.getOnePokemon('${pokemons.index}'" >${pokemons.name}</p>

        `
    }



}