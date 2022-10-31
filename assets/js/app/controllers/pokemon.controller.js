import { ApiController } from "./api.controller.js";
import { PokemonsView } from "../views/pokemons.view.js";

export class PokemonController {
  constructor() {
    this._maxRecords = 151;
    this._limit = 10;
    this._offset = 0;
    this._pokemonList = document.getElementById("pokemonList");
    this._loadMoreButton = document.getElementById("loadMoreButton");
    this._pokemons = [];
    this._apiController = new ApiController();
    this._pokemonsView = new PokemonsView(this._pokemonList);
    this._content = document.querySelector(".content");
    this._detailsContent = document.querySelector(".details_content");
  }

  _loadPokemonsItens(offset, limit) {
    this._apiController.getPokemons(offset, limit).then((pokemons) => {
      this._pokemons = pokemons;
      this._pokemonsView.update(pokemons);
      this._detailsClick();
    });
  }

  _methodLoadMoreButton() {
    let limit = this._limit;
    this._loadMoreButton.addEventListener("click", () => {
      limit += 10;
      this._apiController.getPokemons(this.offset, limit).then((pokemons) => {
        this._pokemons = pokemons;
        this._pokemonsView.update(pokemons);
        this._detailsClick();
      });
    });
  }

  _detailsClick() {
    const pokemons = this._pokemons;
    const content = this._content;
    const detailsContent = this._detailsContent;
    this._pokemonList.addEventListener("click", (event) => {
      const id = event.target.id - 1;
      console.log(pokemons[id]);
      content.style.display = "none";
      detailsContent.style.display = "block"
    });
  }

  start() {
    this._loadPokemonsItens(this.offset, this._limit);
    this._methodLoadMoreButton();
  }
}
