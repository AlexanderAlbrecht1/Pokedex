let pokedex = {};

async function init() {
    document.getElementById('pokecardArea').innerHTML = ``;
    showLoadingSpinner();
    await fetchPokemonData();
    console.log(pokedex);
    console.log({pokedex}.length);
    loadPokeCard();
    console.log('done');
    hideLoadingSpinner();
    
}

async function fetchPokemonData() {
    const baseUrl = 'https://pokeapi.co/api/v2/pokemon/';


    // Funktion zum Laden der Daten eines einzelnen Pokémon
    async function getPokemonData(id) {
        const response = await fetch(`${baseUrl}${id}`);
        const data = await response.json();
        return data;
    }

    // Iteriere über die Pokémon-IDs von 1 bis 1302
    for (let id = 1; id <= 151; id++) {
        try {
            const data = await getPokemonData(id);
            // Speichere die relevanten Daten im Pokedex
            pokedex[id] = {
                name: data.name,
                id: data.id,
                height: data.height,
                weight: data.weight,
                types: data.types.map(typeInfo => typeInfo.type.name),
                abilities: data.abilities.map(abilityInfo => abilityInfo.ability.name),
                stats: data.stats.map(statInfo => ({
                    name: statInfo.stat.name,
                    value: statInfo.base_stat
                })),
                sprites: {
                    front_shiny: data.sprites.front_shiny,
                    back_shiny: data.sprites.back_shiny,
                    dream_world: data.sprites.other.dream_world.front_default,
                }
            };
        } catch (error) {
            console.error(`Fehler beim Laden der Daten für Pokémon mit ID ${id}:`, error);
        }
    }

    return pokedex;
}


function loadPokeCard() {
    
    for (let i = 1; i < 25 ; i++) {

        document.getElementById('pokecardArea').innerHTML += `
            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <h3>${pokedex[i].name}</h3>
                        <span><b>id: ${pokedex[i].id}</b></span>
                        <img src="${pokedex[i].sprites.back_shiny}" alt="Oops... unfortunately you lost the Pokemon">
                        <div class="pokemonType"> 
                            <span id="pokemonCard${i}" class="typeBox">${pokedex[i].types[0]}</span>
                            <span id="pokemonType2${i}" class="typeBox">${pokedex[i].types[1]}</span>
                        </div>
                    </div> 
                    <div class="flip-card-back">
                        <h3>${pokedex[i].name}</h3>
                        <span class="cb"><b>id: ${pokedex[i].id}</b></span>
                        <img src="${pokedex[i].sprites.front_shiny}" alt="Oops... unfortunately you lost the Pokemon">
                        <button onclick="openBigPokemonCard(${i})" type="button" class="btn btn-secondary btn-lg btn-block mb-2">View details</button>
                    </div>
                </div>
            </div> 
    `;
    checkType2(pokedex[i].types[1], i);
    typeBackgroundColorSmall1(pokedex[i].types[0], i);
    typeBackgroundColorSmall2(pokedex[i].types[1], i);
    }

    console.log('done2');
      

}

function checkType2(pokemonType2, i) {
    if (pokemonType2 == undefined) {
        document.getElementById(`pokemonType2${i}`).classList.add('none')
    }
}

function typeBackgroundColorSmall1(pokemonType, i) {
    if (pokemonType == 'water') {
        document.getElementById(`pokemonCard${i}`).style.backgroundColor = "var(--typeWater)";
    }
    if (pokemonType == 'grass') {
        document.getElementById(`pokemonCard${i}`).style.backgroundColor = "var(--typeGrass)";
    }
    if (pokemonType == 'fire') {
        document.getElementById(`pokemonCard${i}`).style.backgroundColor = "var(--typeFire)";
    }
    if (pokemonType == 'bug') {
        document.getElementById(`pokemonCard${i}`).style.backgroundColor = "var(--typeBug)";
    }
    if (pokemonType == 'normal') {
        document.getElementById(`pokemonCard${i}`).style.backgroundColor = "var(--typeNormal)";
    }
    if (pokemonType == 'poison') {
        document.getElementById(`pokemonCard${i}`).style.backgroundColor = "var(--typePoison)";
    }
    if (pokemonType == 'electric') {
        document.getElementById(`pokemonCard${i}`).style.backgroundColor = "var(--typeElectro)";
    }
    if (pokemonType == 'ground') {
        document.getElementById(`pokemonCard${i}`).style.backgroundColor = "var(--typeGround)";
    }
    if (pokemonType == 'flying') {
        document.getElementById(`pokemonCard${i}`).style.backgroundColor = "var(--typeFlying)";
    }
    if (pokemonType == 'rock') {
        document.getElementById(`pokemonCard${i}`).style.backgroundColor = "var(--typeRock)";
    }
    if (pokemonType == 'fighting') {
        document.getElementById(`pokemonCard${i}`).style.backgroundColor = "var(--typeFighting)";
    }
    if (pokemonType == 'ice') {
        document.getElementById(`pokemonCard${i}`).style.backgroundColor = "var(--typeIce)";
    }
    if (pokemonType == 'psychic') {
        document.getElementById(`pokemonCard${i}`).style.backgroundColor = "var(--typePsychic)";
    }
    if (pokemonType == 'ghost') {
        document.getElementById(`pokemonCard${i}`).style.backgroundColor = "var(--typeGhost)";
    }
    if (pokemonType == 'dragon') {
        document.getElementById(`pokemonCard${i}`).style.backgroundColor = "var(--typeDragon)";
    }
    if (pokemonType == 'fairy') {
        document.getElementById(`pokemonCard${i}`).style.backgroundColor = "var(--typeDragon)";
    }
}

function typeBackgroundColorSmall2(pokemonType, i) {

    if (pokemonType == 'water') {
        document.getElementById(`pokemonType2${i}`).style.backgroundColor = "var(--typeWater)";
    }
    if (pokemonType == 'grass') {
        document.getElementById(`pokemonType2${i}`).style.backgroundColor = "var(--typeGrass)";
    }
    if (pokemonType == 'fire') {
        document.getElementById(`pokemonType2${i}`).style.backgroundColor = "var(--typeFire)";
    }
    if (pokemonType == 'bug') {
        document.getElementById(`pokemonType2${i}`).style.backgroundColor = "var(--typeBug)";
    }
    if (pokemonType == 'normal') {
        document.getElementById(`pokemonType2${i}`).style.backgroundColor = "var(--typeNormal)";
    }
    if (pokemonType == 'poison') {
        document.getElementById(`pokemonType2${i}`).style.backgroundColor = "var(--typePoison)";
    }
    if (pokemonType == 'electric') {
        document.getElementById(`pokemonType2${i}`).style.backgroundColor = "var(--typeElectro)";
    }
    if (pokemonType == 'ground') {
        document.getElementById(`pokemonType2${i}`).style.backgroundColor = "var(--typeGround)";
    }
    if (pokemonType == 'flying') {
        document.getElementById(`pokemonType2${i}`).style.backgroundColor = "var(--typeFlying)";
    }
    if (pokemonType == 'rock') {
        document.getElementById(`pokemonType2${i}`).style.backgroundColor = "var(--typeRock)";
    }
    if (pokemonType == 'fighting') {
        document.getElementById(`pokemonType2${i}`).style.backgroundColor = "var(--typeFighting)";
    }
    if (pokemonType == 'ice') {
        document.getElementById(`pokemonType2${i}`).style.backgroundColor = "var(--typeIce)";
    }
    if (pokemonType == 'psychic') {
        document.getElementById(`pokemonType2${i}`).style.backgroundColor = "var(--typePsychic)";
    }
    if (pokemonType == 'ghost') {
        document.getElementById(`pokemonType2${i}`).style.backgroundColor = "var(--typeGhost)";
    }
    if (pokemonType == 'dragon') {
        document.getElementById(`pokemonType2${i}`).style.backgroundColor = "var(--typeDragon)";
    }
    if (pokemonType == 'fairy') {
        document.getElementById(`pokemonType2${i}`).style.backgroundColor = "var(--typeDragon)";
    }
}



async function openBigPokemonCard(i) {
    let pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    let pokemonJson = await pokemon.json();
    let pokemonType = await pokemonJson.types[0].type.name;
    document.getElementById('BigCardContainer').classList.remove('none');
    document.getElementById('BigCardContainer').innerHTML = '';
    document.getElementById('BigCardContainer').innerHTML += `
    <div class="bigPokemonCard" id="bigPokemonCard">
    <div class="closeSection"> 
        <img onclick="closeBigPokemonCard()" src="img/xmark-solid.svg" alt="close">
    </div>
    <h3>${pokemonJson.name}</h3>
    <div class="evolution">
        <img class="evo1" src="${pokedex[i].sprites.dream_world}" alt="">
    </div>
    <div id="dataBG">
        <div id="data"
            <div class="size">
                <span>weight: ${pokemonJson.weight} kg</span>
                <span>height: ${pokemonJson.height} m</span>
            </div>
        </div>
        <div class="arrows">
            <img onclick="previouslyPokemon(${i})" src="img/circle-arrow-left-solid.svg" alt="back">
            <img onclick="nextPokemon(${i})" src="img/circle-arrow-right-solid.svg" alt="forward">
        </div>
    </div>
    
    
</div>
    `;
    typeBackgroundColorBig(pokemonType);
    disableScroll();
}

function typeBackgroundColorBig(pokemonType) {
    if (pokemonType == 'water') {
        document.getElementById(`bigPokemonCard`).style.backgroundColor = "var(--typeWater)";
    }
    if (pokemonType == 'grass') {
        document.getElementById(`bigPokemonCard`).style.backgroundColor = "var(--typeGrass)";
    }
    if (pokemonType == 'fire') {
        document.getElementById(`bigPokemonCard`).style.backgroundColor = "var(--typeFire)";
    }
    if (pokemonType == 'bug') {
        document.getElementById(`bigPokemonCard`).style.backgroundColor = "var(--typeBug)";
    }
    if (pokemonType == 'normal') {
        document.getElementById(`bigPokemonCard`).style.backgroundColor = "var(--typeNormal)";
    }
    if (pokemonType == 'poison') {
        document.getElementById(`bigPokemonCard`).style.backgroundColor = "var(--typePoison)";
    }
    if (pokemonType == 'electric') {
        document.getElementById(`bigPokemonCard`).style.backgroundColor = "var(--typeElectro)";
    }
    if (pokemonType == 'ground') {
        document.getElementById(`bigPokemonCard`).style.backgroundColor = "var(--typeGround)";
    }
    if (pokemonType == 'flying') {
        document.getElementById(`bigPokemonCard`).style.backgroundColor = "var(--typeFlying)";
    }
    if (pokemonType == 'rock') {
        document.getElementById(`bigPokemonCard`).style.backgroundColor = "var(--typeRock)";
    }
    if (pokemonType == 'fighting') {
        document.getElementById(`bigPokemonCard`).style.backgroundColor = "var(--typeFighting)";
    }
    if (pokemonType == 'ice') {
        document.getElementById(`bigPokemonCard`).style.backgroundColor = "var(--typeIce)";
    }
    if (pokemonType == 'psychic') {
        document.getElementById(`bigPokemonCard`).style.backgroundColor = "var(--typePsychic)";
    }
    if (pokemonType == 'ghost') {
        document.getElementById(`bigPokemonCard`).style.backgroundColor = "var(--typeGhost)";
    }
    if (pokemonType == 'dragon') {
        document.getElementById(`bigPokemonCard`).style.backgroundColor = "var(--typeDragon)";
    }
    if (pokemonType == 'fairy') {
        document.getElementById(`bigPokemonCard`).style.backgroundColor = "var(--typeDragon)";
    }
}

function closeBigPokemonCard() {
    document.getElementById('BigCardContainer').classList.add('none');
    enableScroll();
}

function nextPokemon(i) {
    i++
    openBigPokemonCard(i)
}

function previouslyPokemon(i) {
    i--
    openBigPokemonCard(i)
}

function disableScroll() {
    document.getElementById('html').classList.add('overflowHidden');
}

function enableScroll() {
    document.getElementById('html').classList.remove('overflowHidden');
}

function showLoadingSpinner() {
    document.querySelector("main").style.visibility = "hidden";
    document.getElementById("loading").style.visibility = "visible";
    disableScroll();
}

function hideLoadingSpinner() {
    document.getElementById("loading").style.display = "none";
    document.querySelector("main").style.visibility = "visible";
    enableScroll();
}


