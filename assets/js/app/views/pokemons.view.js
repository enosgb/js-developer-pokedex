import { View } from "./view.js";

export class PokemonsView extends View {
  constructor(element) {
    super(element);
  }

  template(pokemons) {
    return `${pokemons
      .map(
        (pokemon) => `<li id="${pokemon.number}" name="${
          pokemon.name
        }" class="pokemon ${pokemon.type} ">
        <span class="number disable_pointer_events">#${pokemon.number}</span>
        <span class="name ">${pokemon.name}</span>

        <div class="detail disable_pointer_events">
            <ol class="types">
                ${pokemon.types
                  .map((type) => `<li class="type ${type}">${type}</li>`)
                  .join("")}
            </ol>

            <img class="disable_pointer_events" src="${pokemon.photo}"
                 alt="${pokemon.name}">
        </div>
    </li>`
      )
      .join("")}
    
`;
  }
}
