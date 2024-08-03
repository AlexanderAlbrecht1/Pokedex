async function init() {
    document.getElementById('pokecardArea').innerHTML = ``;
    await fetchPokemon();
}

async function fetchPokemon() {

    for (let i = 1; i <= 20; i++) {
        let pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        let pokemonJson = await pokemon.json();
        await loadPokeCard(pokemonJson, i);
    }
}

async function loadPokeCard(pokemonJson, i) {

    let pokemonName = await pokemonJson.name;
    let pokemonPicture = await pokemonJson.sprites.front_shiny;
    let pokemonID = await pokemonJson.id;
    let pokemonPictureBack = await pokemonJson.sprites.back_shiny;
    let pokemonType = await pokemonJson.types[0].type.name;
    if (await pokemonJson.types[1] === undefined) {
        pokemonType2 = 'empty'
    } else {
        pokemonType2 = await pokemonJson.types[1].type.name
    }





    document.getElementById('pokecardArea').innerHTML += `
    <div class="flip-card">
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <h3>${pokemonName}</h3>
                <span><b>id: ${pokemonID}</b></span>
                <img src="${pokemonPictureBack}" alt="
                Oops... unfortunately you lost the Pokemon">
                    <div class="pokemonType"> 
                        <span id="pokemonCard${i}" class="typeBox">${pokemonType}</span>
                        <span id="pokemonType2${i}" class="typeBox">${pokemonType2}</span>
                    </div>
            </div>
            <div class="flip-card-back">
                <h3>${pokemonName}</h3>
                <span class="cb"><b>id: ${pokemonID}</b></span>
                <img src="${pokemonPicture}" alt="
                Oops... unfortunately you lost the Pokemon">
                <button onclick="openBigPokemonCard('${pokemonName}','${pokemonType}')" type="button" class="btn btn-secondary btn-lg btn-block mb-2">View details</button>
            </div>
        </div>
    </div>

    
    `;
    checkType2(pokemonType2, i);
    typeBackgroundColorSmall1(pokemonType, i);
    typeBackgroundColorSmall2(pokemonType2, i);

}

function checkType2(pokemonType2, i) {
    if (pokemonType2 == 'empty') {
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

function openBigPokemonCard(pokemonName, pokemonType) {
    document.getElementById('BigCardContainer').classList.remove('none');
    document.getElementById('BigCardContainer').innerHTML = '';
    document.getElementById('BigCardContainer').innerHTML += `
        <div class="bigPokemonCard" id="bigPokemonCard">
            <div class="closeSection"> 
                <span onclick="closeBigPokemonCard()"> X </span>
            </div>
            <h3>${pokemonName}</h3>
            
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

function disableScroll() {
    document.getElementById('html').classList.add('overflowHidden');
}

function enableScroll() {
    document.getElementById('html').classList.remove('overflowHidden');
}


document.onreadystatechange = function () {
    if (document.readyState !== "complete") {
        document.querySelector("main").style.visibility = "hidden";
        document.getElementById("loading").style.visibility = "visible";
    } else {
        setTimeout(() => {
            document.getElementById("loading").style.display = "none";
            document.querySelector("main").style.visibility = "visible";
        }, 3000)
    }
}; 

