import { AboutController } from "./controllers/AboutController.js";
import { HomeController } from "./controllers/HomeController.js";
import { PokemonsController } from "./controllers/PokemonsController.js";
import { SandboxPokemonsController } from "./controllers/SandboxPokemonsController.js";
import { ValuesController } from "./controllers/ValuesController.js";
import { AboutView } from "./views/AboutView.js";

/**
 * Register your routes for the application here
 * @type {Route[]}
 */
export const router = [
  {
    path: '',
    controller: [PokemonsController, SandboxPokemonsController],
    view: /*html*/`
    <div class="container-fluid">
        <section class="row">
          <div id="pokemon-list" class="col-3 bg-dark"></div>
          <div id="active-pokemon" class="col-6"></div>
          <div class="col-3 bg-dark text-light">
            <div class="text-success" id="pokemon-count"> </div>
            <div id="my-pokemon"></div>
          </div>
        </section>
      </div>
    `
  },
  {
    path: '#/about',
    controller: [AboutController, ValuesController],
    view: AboutView
  }
]






/**
 * Supporting types for the router
 * NOTE Controllers must be non instantiated 
 * @typedef {{[x:string]:any}} controller
 * @typedef {{path: string, controller?:controller |controller[], view?: string, target?: string}} Route
 */