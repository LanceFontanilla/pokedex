


export class Pokemon {
    constructor(data) {
        this.name = data.name
        this.nickName = data.nickName || this.name
        this.img = data.img || data.sprites.front_default
        this.weight = data.weight
        this.height = data.height


        this.creatorID = data.creatorID



    }


    get activeTemplate() {
        return `<div class="row justify-content-center">${this.name}</div>
            <div class="d-flex justify-content-between p-5">
              <div>Height: ${this.height}</div>
              <div>Weight: ${this.weight}</div>
            </div>
            <div class="d-flex justify-content-center">
              <img class="w-100"
                src="${this.img}"
                alt="Pokemon">
            </div>
            
            `
    }


    static PokemonListTemplate(pokemon) {
        return `
        <p class ="selectable text-light py-1 rounded mb-0" onclick="app.PokemonsController.getOnePokemon('${pokemon.name}')" >${pokemon.name}</p>

        `
    }



}