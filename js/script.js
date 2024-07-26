function init(){
    fetchPokemon(1);
    /*loadFirstPokemon(); */
}

async function fetchPokemon(x) {
    let pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${x}`);
    let pokemonJson = await pokemon.json();

    loadPokeCard(pokemonJson);
}

function loadPokeCard(pokemonJson) {
    document.getElementById('pokecardArea').innerHTML = ``;
    let pokemonName = pokemonJson.name;
    let pokemonPicture = pokemonJson.sprites.front_shiny;
    let pokemonType1 = pokemonJson.types[0].type.name;
    let pokemonType2 = pokemonJson.types[1].type.name;
    console.log(pokemonName);

    document.getElementById('pokecardArea').innerHTML += `
    <div class="pokemonCard">
        <h3>${pokemonName}</h3>
        <img src="${pokemonPicture }" alt="">
            <div class="pokemonType">
        <span>${pokemonType1}</span>
        <span>${pokemonType2}</span>
            </div>
    </div>
    `;
}