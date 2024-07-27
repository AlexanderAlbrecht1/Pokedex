function init(){
    document.getElementById('pokecardArea').innerHTML = ``;
    fetchPokemon();
}

async function fetchPokemon() {

    for (let i = 1; i <= 20; i++) {
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
    <div onclick="openBigPokemonCard('${pokemonName}','${pokemonPicture}','${pokemonType}')" class="pokemonCard" id="pokemonCard${i}">
        <h3>${pokemonName}</h3>
        <img src="${pokemonPicture}" alt="">
            <div class="pokemonType">
        <span>type: ${pokemonType}</span>
            </div>
    </div>
    `;
    typeBackgroundColorSmall(pokemonType,i);
}

function typeBackgroundColorSmall(pokemonType,i) {
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
    if (pokemonType =='flying') {
        document.getElementById(`pokemonCard${i}`).style.backgroundColor = "var(--typeFlying)";
    }
    if (pokemonType =='rock') {
        document.getElementById(`pokemonCard${i}`).style.backgroundColor = "var(--typeRock)";
    }
    if (pokemonType =='fighting') {
        document.getElementById(`pokemonCard${i}`).style.backgroundColor = "var(--typeFighting)";
    }
    if (pokemonType =='ice') {
        document.getElementById(`pokemonCard${i}`).style.backgroundColor = "var(--typeIce)";
    }
    if (pokemonType =='psychic') {
        document.getElementById(`pokemonCard${i}`).style.backgroundColor = "var(--typePsychic)";
    }
    if (pokemonType =='ghost') {
        document.getElementById(`pokemonCard${i}`).style.backgroundColor = "var(--typeGhost)";
    }
    if (pokemonType =='dragon') {
        document.getElementById(`pokemonCard${i}`).style.backgroundColor = "var(--typeDragon)";
    }
    if (pokemonType =='fairy') {
        document.getElementById(`pokemonCard${i}`).style.backgroundColor = "var(--typeDragon)";
    }
}

 function openBigPokemonCard(pokemonName,pokemonPicture,pokemonType) {
    document.getElementById('BigCardContainer').classList.remove('none');
    document.getElementById('BigCardContainer').innerHTML = '';
    document.getElementById('BigCardContainer').innerHTML += `
        <div class="bigPokemonCard" id="bigPokemonCard">
            <h4 onclick="closeBigPokemonCard()">Close Card</4>
            <h3>${pokemonName}</h3>
            <img src="${pokemonPicture}" alt="">
        </div>
    `;
    typeBackgroundColorBig(pokemonType);
} 

function typeBackgroundColorBig(pokemonType) {
    if (pokemonType =='water') {
        document.getElementById(`bigPokemonCard`).style.backgroundColor = "var(--typeWater)";
    }
    if (pokemonType =='grass') {
        document.getElementById(`bigPokemonCard`).style.backgroundColor = "var(--typeGrass)";
    }
    if (pokemonType =='fire') {
        document.getElementById(`bigPokemonCard`).style.backgroundColor = "var(--typeFire)";
    }
    if (pokemonType =='bug') {
        document.getElementById(`bigPokemonCard`).style.backgroundColor = "var(--typeBug)";
    }
    if (pokemonType =='normal') {
        document.getElementById(`bigPokemonCard`).style.backgroundColor = "var(--typeNormal)";
    }
    if (pokemonType =='poison') {
        document.getElementById(`bigPokemonCard`).style.backgroundColor = "var(--typePoison)";
    }
    if (pokemonType =='electric') {
        document.getElementById(`bigPokemonCard`).style.backgroundColor = "var(--typeElectro)";
    }
    if (pokemonType =='ground') {
        document.getElementById(`bigPokemonCard`).style.backgroundColor = "var(--typeGround)";
    }
    if (pokemonType =='flying') {
        document.getElementById(`bigPokemonCard`).style.backgroundColor = "var(--typeFlying)";
    }
    if (pokemonType =='rock') {
        document.getElementById(`bigPokemonCard`).style.backgroundColor = "var(--typeRock)";
    }
    if (pokemonType =='fighting') {
        document.getElementById(`bigPokemonCard`).style.backgroundColor = "var(--typeFighting)";
    }
    if (pokemonType =='ice') {
        document.getElementById(`bigPokemonCard`).style.backgroundColor = "var(--typeIce)";
    }
    if (pokemonType =='psychic') {
        document.getElementById(`bigPokemonCard`).style.backgroundColor = "var(--typePsychic)";
    }
    if (pokemonType =='ghost') {
        document.getElementById(`bigPokemonCard`).style.backgroundColor = "var(--typeGhost)";
    }
    if (pokemonType =='dragon') {
        document.getElementById(`bigPokemonCard`).style.backgroundColor = "var(--typeDragon)";
    }
    if (pokemonType =='fairy') {
        document.getElementById(`bigPokemonCard`).style.backgroundColor = "var(--typeDragon)";
    }
}

function closeBigPokemonCard() {
    document.getElementById('BigCardContainer').classList.add('none');
}