import { View } from "./view.js";

export class PokemonDetailsView extends View {
  constructor(element) {
    super(element);
  }

  template(pokemon) {
    console.log(pokemon);
    return `
    <div class="${pokemon.type}">
    <div id="pokemonsDetails" class="pokemon poke_details ">
    <span class="number">#${pokemon.number}</span>
    <span class="name">${pokemon.name}</span>
    <div class="detail">
      <ol class="types d-flex">
      ${pokemon.types
        .map((type) => `<li class="type ${type}">${type}</li>`)
        .join("")}
      </ol>
    </div>
  </div>
  <img
    class="img_pokemon_details disable_pointer_events"
    src="${pokemon.photo}"
    alt="${pokemon.name}"
  />
  <div class="tabs_card">
    <ul>
      <li class="tab_selected"><p>About</p></li>
      <li><p>Base stats</p></li>
      <li><p>Evolution</p></li>
      <li><p>Moves</p></li>
    </ul>
    <div>
      <table>
        <tr>
          <td>Species</td>
          <td>${pokemon.type}</td>
        </tr>
        <tr>
          <td>Height</td>
          <td>${pokemon.height}" POL</td>
        </tr>
        <tr>
          <td>Weight</td>
          <td>${pokemon.weight} libs</td>
        </tr>
        <tr>
          <td>Abilities</td>
          ${pokemon.abilities.map((abilitie) => `<td>${abilitie}</td>`).join("")}
        </tr>
      </table>
      <h3 class="title_details">Breeding</h3>
      <table>
        <tr>
          <td>Gender</td>
          <td>${pokemon.gender}</td>
        </tr>
        <tr>
          <td>Egg Groups</td>
          <td>${pokemon.eggGroups[0].name}</td>
        </tr>
        <tr>
          <td>Egg Cycle</td>
          <td>${pokemon.eggCycle}</td>
        </tr>
      </table>
    </div>
  </div>
  </div>
    `;
  }
}
