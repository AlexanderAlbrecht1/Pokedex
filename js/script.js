let pokedex = [];
let currentIndex = 0;
let results = [];


async function init() {
    showLoadingSpinner();
    document.getElementById('pokecardArea').innerHTML = ``;
    await fetchPokemonData();
    hideLoadingSpinner();
    loadPokeCard(25);
}

async function fetchPokemonData() {
    let baseUrl = 'https://pokeapi.co/api/v2/pokemon/';
    async function getPokemonData(id) {
        let response = await fetch(`${baseUrl}${id}`);
        let data = await response.json();
        return data;
    }
    for (let id = 1; id <= 151; id++) {
        try {
            let data = await getPokemonData(id);
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


function loadPokeCard(count) {
    let loadCount = `${count}`;
    let endIndex = Math.min(currentIndex + +loadCount, Object.keys(pokedex).length);
    for (let i = currentIndex + 1; i <= endIndex; i++) {
        document.getElementById('pokecardArea').innerHTML += `
            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front" id="flip-card-front${i}">
                        <h3>${pokedex[i].name}</h3>
                        <span><b>id: ${pokedex[i].id}</b></span>
                        <img src="${pokedex[i].sprites.back_shiny}" alt="Oops... unfortunately you lost the Pokemon">
                        <div class="pokemonType"> 
                            <span id="pokemonCard${i}" class="typeBox">${pokedex[i].types[0]}</span>
                            <span id="pokemonType2${i}" class="typeBox">${pokedex[i].types[1]}</span>
                        </div>
                    </div> 
                    <div class="flip-card-back" id="flip-card-back${i}">
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
    currentIndex = endIndex;
    if (currentIndex >= Object.keys(pokedex).length) {
        document.getElementById('loadMorePokemonButton').classList.add('none');
    }
}

function checkType2(pokemonType2, i) {
    if (pokemonType2 == undefined) {
        document.getElementById(`pokemonType2${i}`).classList.add('none')
    }
}

function typeBackgroundColorSmall1(pokemonType, i) {
    if (pokemonType == 'water') {
        document.getElementById(`pokemonCard${i}`).style.backgroundColor = "var(--typeWater)";
        document.getElementById(`flip-card-front${i}`).style.border = "10px double var(--typeWater)";
        document.getElementById(`flip-card-back${i}`).style.border = "10px double var(--typeWater)";
    }
    if (pokemonType == 'grass') {
        document.getElementById(`pokemonCard${i}`).style.backgroundColor = "var(--typeGrass)";
        document.getElementById(`flip-card-front${i}`).style.border = "10px double var(--typeGrass)";
        document.getElementById(`flip-card-back${i}`).style.border = "10px double var(--typeGrass)";
    }
    if (pokemonType == 'fire') {
        document.getElementById(`pokemonCard${i}`).style.backgroundColor = "var(--typeFire)";
        document.getElementById(`flip-card-front${i}`).style.border = "10px double var(--typeFire)";
        document.getElementById(`flip-card-back${i}`).style.border = "10px double var(--typeFire)";
    }
    if (pokemonType == 'bug') {
        document.getElementById(`pokemonCard${i}`).style.backgroundColor = "var(--typeBug)";
        document.getElementById(`flip-card-front${i}`).style.border = "10px double var(--typeBug)";
        document.getElementById(`flip-card-back${i}`).style.border = "10px double var(--typeBug)";
    }
    if (pokemonType == 'normal') {
        document.getElementById(`pokemonCard${i}`).style.backgroundColor = "var(--typeNormal)";
        document.getElementById(`flip-card-front${i}`).style.border = "10px double var(--typeNormal)";
        document.getElementById(`flip-card-back${i}`).style.border = "10px double var(--typeNormal)";
    }
    if (pokemonType == 'poison') {
        document.getElementById(`pokemonCard${i}`).style.backgroundColor = "var(--typePoison)";
        document.getElementById(`flip-card-front${i}`).style.border = "10px double var(--typePoison)";
        document.getElementById(`flip-card-back${i}`).style.border = "10px double var(--typePoison)";
    }
    if (pokemonType == 'electric') {
        document.getElementById(`pokemonCard${i}`).style.backgroundColor = "var(--typeElectro)";
        document.getElementById(`flip-card-front${i}`).style.border = "10px double var(--typeElectro)";
        document.getElementById(`flip-card-back${i}`).style.border = "10px double var(--typeElectro)";
    }
    if (pokemonType == 'ground') {
        document.getElementById(`pokemonCard${i}`).style.backgroundColor = "var(--typeGround)";
        document.getElementById(`flip-card-front${i}`).style.border = "10px double var(--typeGround)";
        document.getElementById(`flip-card-back${i}`).style.border = "10px double var(--typeGround)";
    }
    if (pokemonType == 'flying') {
        document.getElementById(`pokemonCard${i}`).style.backgroundColor = "var(--typeFlying)";
        document.getElementById(`flip-card-front${i}`).style.border = "10px double var(--typeFlying)";
        document.getElementById(`flip-card-back${i}`).style.border = "10px double var(--typeFlying)";
    }
    if (pokemonType == 'rock') {
        document.getElementById(`pokemonCard${i}`).style.backgroundColor = "var(--typeRock)";
        document.getElementById(`flip-card-front${i}`).style.border = "10px double var(--typeRock)";
        document.getElementById(`flip-card-back${i}`).style.border = "10px double var(--typeRock)";
    }
    if (pokemonType == 'fighting') {
        document.getElementById(`pokemonCard${i}`).style.backgroundColor = "var(--typeFighting)";
        document.getElementById(`flip-card-front${i}`).style.border = "10px double var(--typeFighting)";
        document.getElementById(`flip-card-back${i}`).style.border = "10px double var(--typeFighting)";
    }
    if (pokemonType == 'ice') {
        document.getElementById(`pokemonCard${i}`).style.backgroundColor = "var(--typeIce)";
        document.getElementById(`flip-card-front${i}`).style.border = "10px double var(--typeIce)";
        document.getElementById(`flip-card-back${i}`).style.border = "10px double var(--typeIce)";
    }
    if (pokemonType == 'psychic') {
        document.getElementById(`pokemonCard${i}`).style.backgroundColor = "var(--typePsychic)";
        document.getElementById(`flip-card-front${i}`).style.border = "10px double var(--typePsychic)";
        document.getElementById(`flip-card-back${i}`).style.border = "10px double var(--typePsychic)";
    }
    if (pokemonType == 'ghost') {
        document.getElementById(`pokemonCard${i}`).style.backgroundColor = "var(--typeGhost)";
        document.getElementById(`flip-card-front${i}`).style.border = "10px double var(--typeGhost)";
        document.getElementById(`flip-card-back${i}`).style.border = "10px double var(--typeGhost)";
    }
    if (pokemonType == 'dragon') {
        document.getElementById(`pokemonCard${i}`).style.backgroundColor = "var(--typeDragon)";
        document.getElementById(`flip-card-front${i}`).style.border = "10px double var(--typeDragon)";
        document.getElementById(`flip-card-back${i}`).style.border = "10px double var(--typeDragon)";
    }
    if (pokemonType == 'fairy') {
        document.getElementById(`pokemonCard${i}`).style.backgroundColor = "var(--typeFairy)";
        document.getElementById(`flip-card-front${i}`).style.border = "10px double var(--typeFairy)";
        document.getElementById(`flip-card-back${i}`).style.border = "10px double var(--typeFairy)";
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
        document.getElementById(`pokemonType2${i}`).style.backgroundColor = "var(--typeFairy)";
    }
}



async function openBigPokemonCard(i) {
    let pokemon = pokedex[i];
    let weightKg = (pokemon.weight * 0.1).toFixed(1);
    weightKg = weightKg.endsWith('.0') ? weightKg.slice(0, -2) : weightKg;
    document.getElementById('BigCardContainer').classList.remove('none');
    document.getElementById('BigCardContainer').innerHTML = '';
    let statsHTML = '';
    for (let x = 0; x < pokemon.stats.length; x++) {
        statsHTML += `
            <div class="stat-bar">
                <div class="stat-label">${pokemon.stats[x].name}:</div>
                <div class="stat-value" id="stat-value${x}" style="width: ${pokemon.stats[x].value}px; max-width: 200px !important">
                    <span>${pokemon.stats[x].value}</span>
                </div>
            </div>
        `;
    }
    document.getElementById('BigCardContainer').innerHTML += `
    <div class="bigPokemonCard" id="bigPokemonCard">
        <div class="bigCardHead">
            <span>id: ${pokemon.id}</span>
            <h3>${pokemon.name}</h3>
            <img onclick="closeBigPokemonCard()" src="img/xmark-solid.svg" alt="close">
        </div>
    <div class="evolution">
        <img class="evo1" src="${pokemon.sprites.dream_world}" alt="">
    </div>

    <div class="size">
    <div class="weight">
        <span>weight:</span> 
        <span>${weightKg}kg</span>
    </div>
    <div class="heigth">
        <span>height:</span> 
        <span>${(pokemon.height / 10)} m</span>
    </div>
    </div>

    <div id="dataBG">
    
        <div id="data"
            
            <div id="statsContainer${i}" class="stats-container">
                ${statsHTML}
            </div>
        </div>
        <div class="arrows">
            <img onclick="previouslyPokemon(${i},event)" src="img/circle-arrow-left-solid.svg" alt="back">
            <img onclick="nextPokemon(${i},event)" src="img/circle-arrow-right-solid.svg" alt="forward">
        </div>
    </div>
    
    
</div>
    `;
    typeBackgroundColorBig(pokedex[i].types[0], i);
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
    event.stopPropagation();
    i++;
    if (i >= pokedex.length) {
        i = 1;
        openBigPokemonCard(i);
    } else {
        openBigPokemonCard(i);
    }

}

function nextResultPokemon(i) {
    event.stopPropagation();
    i++;
    if (i >= results.length) {
        i = 0;
        openBigResultCard(i);
    } else {
        openBigResultCard(i);
    }

}

function previouslyPokemon(i) {
    event.stopPropagation();
    i--;
    if (i == 0) {
        i = (+pokedex.length - 1);
        openBigPokemonCard(i);
    } else {
        openBigPokemonCard(i);
    }

}

function previouslyResultPokemon(i) {
    event.stopPropagation();
    i--;
    if (i < 0) {
        i = (results.length - 1);
        openBigResultCard(i)
    } else {
        openBigResultCard(i);
    }

}

function disableScroll() {
    document.getElementById('html').classList.add('overflowHidden');
}

function enableScroll() {
    document.getElementById('html').classList.remove('overflowHidden');
}

function showLoadingSpinner() {
    document.getElementById('main').style.visibility = "hidden";
    document.getElementById('loading').style.visibility = "visible";
    disableScroll();
}

function hideLoadingSpinner() {
    document.getElementById('loading').style.visibility = "hidden";
    document.getElementById('main').style.visibility = "visible";
    enableScroll();
}

function searchAndDisplayPokemons() {
    let query = document.getElementById('searchInput').value.trim().toLowerCase();
    results = [];
    if (query.length >= 3) {

        let searchResults = searchPokemonByName(query);
        displaySearchResults(searchResults);
    } else {
        if (query.length == 0) {
            currentIndex = 0;
            document.getElementById('pokecardArea').innerHTML = ``;
            loadPokeCard(25);

        } else {
            document.getElementById('pokecardArea').innerHTML = `<p> Please type 3 letters minimum. </p>`;
            document.getElementById('loadMorePokemonButton').classList.add('none')
        }

    }
}

function searchPokemonByName(query) {

    for (let i = 1; i < Object.keys(pokedex).length; i++) {
        if (pokedex[i].name.toLowerCase().includes(query)) {
            results.push(pokedex[i]);
        }
    }

    return results;
}

function displaySearchResults(pokemons) {
    document.getElementById('pokecardArea').innerHTML = ' ';

    if (results.length > 0) {
        for (let i = 0; i < results.length; i++) {
            document.getElementById('pokecardArea').innerHTML += `
            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front" id="flip-card-front${i}">
                        <h3>${results[i].name}</h3>
                        <span><b>id: ${results[i].id}</b></span>
                        <img src="${results[i].sprites.back_shiny}" alt="Oops... unfortunately you lost the Pokemon">
                        <div class="pokemonType"> 
                            <span id="pokemonCard${i}" class="typeBox">${results[i].types[0]}</span>
                            <span id="pokemonType2${i}" class="typeBox">${results[i].types[1]}</span>
                        </div>
                    </div> 
                    <div class="flip-card-back" id="flip-card-back${i}">
                        <h3>${results[i].name}</h3>
                        <span class="cb"><b>id: ${results[i].id}</b></span>
                        <img src="${results[i].sprites.front_shiny}" alt="Oops... unfortunately you lost the Pokemon">
                        <button onclick="openBigResultCard(${i})" type="button" class="btn btn-secondary btn-lg btn-block mb-2">View details</button>
                    </div>
                </div>
            </div> 
    `;
            checkType2(results[i].types[1], i);
            typeBackgroundColorSmall1(results[i].types[0], i);
            typeBackgroundColorSmall2(results[i].types[1], i);

        }
    } else {
        document.getElementById('pokecardArea').innerHTML = `<p>No Pokémon found matching "${document.getElementById('searchInput').value}".</p>`;
    }


}

function openBigResultCard(i) {
    let pokemon = results[i];
    let weightKg = (pokemon.weight * 0.1).toFixed(1);
    weightKg = weightKg.endsWith('.0') ? weightKg.slice(0, -2) : weightKg;
    document.getElementById('BigCardContainer').classList.remove('none');
    document.getElementById('BigCardContainer').innerHTML = '';

    // Erzeuge HTML für die Statistiken
    let statsHTML = '';

    for (let x = 0; x < pokemon.stats.length; x++) {
        statsHTML += `
            <div class="stat-bar">
                <div class="stat-label">${pokemon.stats[x].name}:</div>
                <div class="stat-value" id="stat-value${x}" style="width: ${pokemon.stats[x].value}px; max-width: 200px !important">
                    <span>${pokemon.stats[x].value}</span>
                </div>
            </div>
        `;
    }

    document.getElementById('BigCardContainer').innerHTML += `
    <div class="bigPokemonCard" id="bigPokemonCard">
        <div class="bigCardHead">
            <span>id: ${pokemon.id}</span>
            <h3>${pokemon.name}</h3>
            <img onclick="closeBigPokemonCard()" src="img/xmark-solid.svg" alt="close">
        </div>
        <div class="evolution">
            <img class="evo1" src="${pokemon.sprites.dream_world}" alt="">
        </div>

        <div class="size">
        <div class="weight">
            <span>weight:</span> 
            <span>${weightKg} kg</span>
        </div>
        <div class="heigth">
            <span>height:</span> 
            <span>${(pokemon.height / 10)} m</span>
        </div>
        </div>

        <div id="dataBG">
            <div id="data"
                
                <div id="statsContainer${i}" class="stats-container">
                    ${statsHTML}
                </div>
            </div>
        <div class="arrows">
            <img onclick="previouslyResultPokemon(${i})" src="img/circle-arrow-left-solid.svg" alt="back">
            
            <img onclick="nextResultPokemon(${i})" src="img/circle-arrow-right-solid.svg" alt="forward">
        </div>
    </div>
    
    
</div>
    `;
    typeBackgroundColorBig(pokemon.types[0], i);
    disableScroll();
}

function loadMorePokemon() {
    showLoadingSpinner();
    setTimeout(() => {
        loadPokeCard(20); // Karten laden
        hideLoadingSpinner(); // Lade-Spinner ausblenden
    }, 500); // Simulierte Ladezeit von 1 Sekunde, kannst du je nach Bedarf anpassen
}

function clearSearch() {
    results = [];
    document.getElementById('searchInput').value = '';
    document.getElementById('pokecardArea').innerHTML = '';
    currentIndex = 0;
    loadPokeCard(25);
}



