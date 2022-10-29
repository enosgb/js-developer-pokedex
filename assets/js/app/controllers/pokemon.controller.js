import { ApiController } from "./api.controller.js";
import { PokemonsView } from "../views/pokemons.view.js";

export class PokemonController {
  start() {
    const pokemonList = document.getElementById("pokemonList");
    const apiController = new ApiController();
    const pokemonsView = new PokemonsView(pokemonList);
    apiController.getPokemons().then((pokemons) => {
      pokemonsView.update(pokemons);
    });
  }
}
