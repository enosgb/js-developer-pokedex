import { Pokemon } from "../models/pokemon.model.js";

export class ApiController {
  teste(pokemons) {
    return pokemons;
  }

  _getPokemonDetail(pokemon) {
    function teste(eggGroup) {
      return eggGroup.name;
    }

    async function convertPokeApiDetailToPokemon(pokeDetail) {
      const pokemon = new Pokemon();
      pokemon.number = pokeDetail.id;
      pokemon.name = pokeDetail.name;

      const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name);
      const [type] = types;

      pokemon.types = types;
      pokemon.type = type;

      pokemon.height = pokeDetail.height;
      pokemon.weight = pokeDetail.weight;
      pokemon.abilities = pokeDetail.abilities.map(
        (abilities) => abilities.ability.name
      );

      pokemon.photo = pokeDetail.sprites.other.dream_world.front_default;

      const eggGroups = await fetch(pokeDetail.species.url)
        .then((response) => response.json())
        .then((pokemons) => Promise.all(pokemons.egg_groups));
      pokemon.eggGroups = eggGroups;

      pokemon.eggCycle = type;

      pokemon.gender = "female";

      return pokemon;
    }

    return fetch(pokemon.url)
      .then((response) => response.json())
      .then(convertPokeApiDetailToPokemon);
  }

  async getPokemons(offset = 0, limit = 5) {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

    return await fetch(url)
      .then((Response) => Response.json())
      .then((jsonBody) => jsonBody.results)
      .then((pokemons) => pokemons.map(this._getPokemonDetail))
      .then((detailRequests) => Promise.all(detailRequests))
      .then((pokemonsDetails) => pokemonsDetails);
  }
}
