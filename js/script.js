async function init() {
    showLoadingSpinner();
    document.getElementById('pokecardArea').innerHTML = ``;
    await fetchPokemonData();
    hideLoadingSpinner();
    loadPokeCard(25);
}

async function fetchPokemonData() {
    const baseUrl = 'https://pokeapi.co/api/v2/pokemon/';
    async function getPokemonData(id) {
        const response = await fetch(`${baseUrl}${id}`);
        return response.json();
    }
    const requests = Array.from({ length: 300 }, (_, i) => getPokemonData(i + 1));
    try {
        let results = await Promise.all(requests);
        results.forEach(data => {
            pokedex[data.id] = {
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
        });
        return pokedex;
    } catch (error) {
        console.error('Fehler beim Laden der Pokémon-Daten:', error);
    }
}

function loadPokeCard(count) {
    let loadCount = `${count}`;
    let endIndex = Math.min(currentIndex + +loadCount, Object.keys(pokedex).length);
    for (let i = currentIndex + 1; i <= endIndex; i++) {
        generateSmallCard(pokedex[i], i);
    }
    document.getElementById('loadMorePokemonButton').classList.remove('none')
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
    const color = typeColors[pokemonType];
    let card = document.getElementById(`pokemonCard${i}`);
    let front = document.getElementById(`flip-card-front${i}`);
    let back = document.getElementById(`flip-card-back${i}`);
    if (color) {
        card.style.backgroundColor = color;
        front.style.border = `10px double ${color}`;
        back.style.border = `10px double ${color}`;
    }
}

function typeBackgroundColorSmall2(pokemonType, i) {
    let color = typeColors[pokemonType];
    if (color) {
        document.getElementById(`pokemonType2${i}`).style.backgroundColor = color;
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
        statsHTML += generateStatsHTML(pokemon.stats[x], x);
    }
    document.getElementById('BigCardContainer').innerHTML += generateBigCardHTML(pokemon, weightKg, statsHTML, i);
    typeBackgroundColorBig(pokedex[i].types[0], i);
    disableScroll();
}

function typeBackgroundColorBig(pokemonType) {
    let color = typeColors[pokemonType];
    if (color) {
        document.getElementById('bigPokemonCard').style.backgroundColor = color;
    }
}

function closeBigPokemonCard() {
    document.getElementById('BigCardContainer').classList.add('none');
    enableScroll();
}

function nextPokemon(i) {
    nextItem(i, pokedex.length, openBigPokemonCard);
}

function nextResultPokemon(i) {
    nextItem(i, results.length, openBigResultCard);
}

function previouslyPokemon(i) {
    previouslyItem(i, pokedex.length, openBigPokemonCard);
}

function previouslyResultPokemon(i) {
    previouslyItem(i, results.length, openBigResultCard);
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
            let pokemon = results[i];
            generateSmallResultCard(pokemon, i);
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
    let statsHTML = '';
    for (let x = 0; x < pokemon.stats.length; x++) {
        statsHTML += generateStatsHTML(pokemon.stats[x], x);
    }
    document.getElementById('BigCardContainer').innerHTML += generateBigResultCardHTML(pokemon, weightKg, statsHTML, i);
    typeBackgroundColorBig(pokemon.types[0], i);
    disableScroll();
}

function loadMorePokemon() {
    showLoadingSpinner();
    setTimeout(() => {
        loadPokeCard(20);
        hideLoadingSpinner();
    }, 500);
}

function clearSearch() {
    results = [];
    document.getElementById('searchInput').value = '';
    document.getElementById('pokecardArea').innerHTML = '';
    currentIndex = 0;
    loadPokeCard(25);
}

function generateSmallCard(pokemon, i) {
    document.getElementById('pokecardArea').innerHTML += generateSmallCardHTML(pokemon, i);
    checkType2(pokemon.types[1], i);
    typeBackgroundColorSmall1(pokemon.types[0], i);
    typeBackgroundColorSmall2(pokemon.types[1], i);
}

function generateSmallResultCard(pokemon, i) {
    document.getElementById('pokecardArea').innerHTML += generateSmallResultCardHTML(pokemon, i);
    checkType2(pokemon.types[1], i);
    typeBackgroundColorSmall1(pokemon.types[0], i);
    typeBackgroundColorSmall2(pokemon.types[1], i);
}

function nextItem(i, arrayLength, openCardFunction) {
    event.stopPropagation();
    i++;
    if (i >= arrayLength) {
        i = 1;
    }
    openCardFunction(i);
}

function previouslyItem(i, arrayLength, openCardFunction) {
    event.stopPropagation();
    i--;
    if (i < 1) {
        i = +arrayLength - 1;
    }
    openCardFunction(i);
}