function generateSmallCardHTML(pokemon, i) {
    return `
            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front" id="flip-card-front${i}">
                        <h3>${pokemon.name}</h3>
                        <span><b>id: ${pokemon.id}</b></span>
                        <img src="${pokemon.sprites.back_shiny}" alt="Oops... unfortunately you lost the Pokemon">
                        <div class="pokemonType"> 
                            <span id="pokemonCard${i}" class="typeBox">${pokemon.types[0]}</span>
                            <span id="pokemonType2${i}" class="typeBox">${pokemon.types[1]}</span>
                        </div>
                    </div> 
                    <div class="flip-card-back" id="flip-card-back${i}">
                        <h3>${pokemon.name}</h3>
                        <span class="cb"><b>id: ${pokemon.id}</b></span>
                        <img src="${pokemon.sprites.front_shiny}" alt="Oops... unfortunately you lost the Pokemon">
                        <button onclick="openBigPokemonCard(${i})" type="button" class="btn btn-secondary btn-lg btn-block mb-2">View details</button>
                    </div>
                </div>
            </div> 
    `
}

function generateSmallResultCardHTML(pokemon, i) {
    return `
            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front" id="flip-card-front${i}">
                        <h3>${pokemon.name}</h3>
                        <span><b>id: ${pokemon.id}</b></span>
                        <img src="${pokemon.sprites.back_shiny}" alt="Oops... unfortunately you lost the Pokemon">
                        <div class="pokemonType"> 
                            <span id="pokemonCard${i}" class="typeBox">${pokemon.types[0]}</span>
                            <span id="pokemonType2${i}" class="typeBox">${pokemon.types[1]}</span>
                        </div>
                    </div> 
                    <div class="flip-card-back" id="flip-card-back${i}">
                        <h3>${pokemon.name}</h3>
                        <span class="cb"><b>id: ${pokemon.id}</b></span>
                        <img src="${pokemon.sprites.front_shiny}" alt="Oops... unfortunately you lost the Pokemon">
                        <button onclick="openBigResultCard(${i})" type="button" class="btn btn-secondary btn-lg btn-block mb-2">View details</button>
                    </div>
                </div>
            </div> 
    `
}

function generateStatsHTML(PokemonStats, x) {
    return `
            <div class="stat-bar">
                <div class="stat-label">${PokemonStats.name}:</div>
                <div class="stat-value" id="stat-value${x}" style="width: ${PokemonStats.value}px; max-width: 200px !important">
                    <span>${PokemonStats.value}</span>
                </div>
            </div>
`
}

function generateBigCardHTML(pokemon, weightKg, statsHTML, i) {
    return `
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
                    <div id="statsContainer${i}" class="stats-container">
                        ${statsHTML}
                    </div>
                </div>
                <div class="arrows">
                    <img onclick="previouslyPokemon(${i},event)" src="img/circle-arrow-left-solid.svg" alt="back">
                    <img onclick="nextPokemon(${i},event)" src="img/circle-arrow-right-solid.svg" alt="forward">
                </div>
            </div>
    `
}

function generateBigResultCardHTML(pokemon, weightKg, statsHTML, i) {
    return `
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
                    <div id="statsContainer${i}" class="stats-container">
                        ${statsHTML}
                    </div>
                </div>
                <div class="arrows">
                    <img onclick="previouslyResultPokemon(${i},event)" src="img/circle-arrow-left-solid.svg" alt="back">
                    <img onclick="nextResultPokemon(${i},event)" src="img/circle-arrow-right-solid.svg" alt="forward">
                </div>
            </div>
    `
}