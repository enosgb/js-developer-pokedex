const pokemonList = document.getElementById("pokemonList");
const loadMoreButton = document.getElementById("loadMoreButton");
const pokemonClickDetails = document.querySelector(".pokemons");
const content = document.querySelector(".content");
const contentPokemon = document.querySelector(".contentPokemon");

const maxRecords = 151;
const limit = 10;
let offset = 0;

function convertPokemonToLi(pokemon) {
  return `
        <li id="${pokemon.number}" name="${pokemon.name}" class="pokemon ${
    pokemon.type
  } ">
            <span class="number disable_pointer_events">#${
              pokemon.number
            }</span>
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
        </li>
    `;
}

function loadPokemonItens(offset, limit) {
  pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
    const newHtml = pokemons.map(convertPokemonToLi).join("");
    pokemonList.innerHTML += newHtml;
  });
}

loadPokemonItens(offset, limit);

loadMoreButton.addEventListener("click", () => {
  offset += limit;
  const qtdRecordsWithNexPage = offset + limit;

  if (qtdRecordsWithNexPage >= maxRecords) {
    const newLimit = maxRecords - offset;
    loadPokemonItens(offset, newLimit);

    loadMoreButton.parentElement.removeChild(loadMoreButton);
  } else {
    loadPokemonItens(offset, limit);
  }
});

function unhideAndHideContent() {
  pokemonClickDetails.addEventListener("click", (event) => {
    //content.style.display = "none";
    const pokemonId = event.target.id - 1;
    const pokemonName = event.target.getAttribute("name");
    loadPokemonDetails(pokemonId, pokemonName);
  });
}

function loadPokemonDetails(pokemonId, pokemonName) {
  let pokemon = {
    name: pokemonName,
    url: `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`,
  };
  const result = pokeApi.getPokemonDetail(pokemon);
  console.log(result)
  
}

unhideAndHideContent();
