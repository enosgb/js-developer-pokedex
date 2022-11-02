import { PokemonDetailsView } from "../views/pokemon.details.view.js";

export class PokemonDetailsController {
  constructor() {
    this._details_content = document.querySelector(".details_content");
    this._pokemonDetailsView = new PokemonDetailsView(this._details_content);
  }
  loadDetails(pokemon) {
    this._pokemonDetailsView.update(pokemon);
  }
}
