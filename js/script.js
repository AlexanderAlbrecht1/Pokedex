function init(){
    document.getElementById('pokecardArea').innerHTML = ``;
    fetchPokemon();
}

async function fetchPokemon() {

    for (let i = 1; i <= 151; i++) {
        let pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        let pokemonJson = await pokemon.json();
        loadPokeCard(pokemonJson,i);    
    }   
}

async function loadPokeCard(pokemonJson,i) {
   
    let pokemonName = await pokemonJson.name;
    let pokemonPicture = await pokemonJson.sprites.front_shiny;
    let pokemonType = await pokemonJson.types[0].type.name;
   
    

    document.getElementById('pokecardArea').innerHTML += `
    <div class="pokemonCard" id="pokemonCard${i}">
        <h3>${pokemonName}</h3>
        <img src="${pokemonPicture }" alt="">
            <div class="pokemonType">
        <span>type: ${pokemonType}</span>
            </div>
    </div>
    `;
    typeBackgroundColor(pokemonType,i);
}

function typeBackgroundColor(pokemonType,i) {
    if (pokemonType =='water') {
        document.getElementById(`pokemonCard${i}`).style.backgroundColor = "var(--typeWater)";
    }
    if (pokemonType =='grass') {
        document.getElementById(`pokemonCard${i}`).style.backgroundColor = "var(--typeGrass)";
    }
    if (pokemonType =='fire') {
        document.getElementById(`pokemonCard${i}`).style.backgroundColor = "var(--typeFire)";
    }
    if (pokemonType =='bug') {
        document.getElementById(`pokemonCard${i}`).style.backgroundColor = "var(--typeBug)";
    }
    if (pokemonType =='normal') {
        document.getElementById(`pokemonCard${i}`).style.backgroundColor = "var(--typeNormal)";
    }
    if (pokemonType =='poison') {
        document.getElementById(`pokemonCard${i}`).style.backgroundColor = "var(--typePoison)";
    }
    if (pokemonType =='electric') {
        document.getElementById(`pokemonCard${i}`).style.backgroundColor = "var(--typeElectro)";
    }
    if (pokemonType =='ground') {
        document.getElementById(`pokemonCard${i}`).style.backgroundColor = "var(--typeGround)";
    }
}