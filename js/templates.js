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

function getImprintHTML() {
    return /*html*/ `
    <div class="bg" id="top">
  <div class="imprint-wrapper">


      <div class="imprint">
        <h1>Imprint</h1>
        <p>Details according to § 5 DDG</p>
        <p>
          Alexander Albrecht <br />
          Andreasstraße 51<br />
          10243 Berlin <br />
        </p>
        <p>
          <strong>Represented by: </strong><br />
          Alexander Albrecht<br />
        </p>
        <p>
          <strong>Contact:</strong> <br />
          Phone: 0049 163 23 44 960<br />
          E-Mail:
          <a href="mailto:alexander.albrecht1@gmail.com"
            >alexander.albrecht1&#64;gmail.com</a
          >
        </p>
        <h2>Disclaimer:</h2>

        <h2>Liability for content</h2>
        <p>
          The contents of our pages have been created with the greatest care.
          However, we cannot accept any liability for the accuracy, completeness
          and timeliness of the contents. As service providers, we are
          responsible for our own contents on these pages in accordance with § 7
          paragraph 1 DDG under general law. However, according to §§ 8 to 10
          DDG, as service providers, we are not obligated to monitor submitted
          or stored third-party information or to search for circumstances that
          indicate illegal activities. Obligations to remove or block the use of
          information under general law remain unaffected. In this case,
          liability is only possible at the time of knowledge about a specific
          violation of law. If we become aware of any such violations, we will
          remove this content immediately.
        </p>

        <h2>Liability for links</h2>
        <p>
          Our offer contains links to external third-party websites, over whose
          content we have no influence. Therefore, we cannot accept any
          liability for this external content. The respective provider or
          operator of the site is always responsible for the content of the
          linked pages. The linked pages were checked for possible legal
          violations at the time of linking. Illegal content was not
          recognizable at the time of linking. However, permanent control of the
          content of the linked pages is not reasonable without concrete
          evidence of a legal violation. If we become aware of any legal
          violations, we will remove such links immediately.
        </p>

        <h2>Copyright</h2>
        <p>
          The content and works on these pages created by the site operators are
          subject to German copyright law. Duplication, processing, distribution
          and any type of exploitation outside the limits of copyright law
          require the written consent of the respective author or creator.
          Downloads and copies of this site are only permitted for private,
          non-commercial use. Insofar as the content on this site was not
          created by the operator, the copyrights of third parties are
          respected. In particular, third-party content is marked as such.
          Should you nevertheless become aware of a copyright infringement,
          please inform us accordingly. If we become aware of any infringements,
          we will remove such content immediately.
        </p>

        <h2>Data protection</h2>
        <p>
          Our website can generally be used without providing personal data. If
          personal data (such as name, address or email addresses) is collected
          on our website, this is always done on a voluntary basis as far as
          possible. This data will not be passed on to third parties without
          your express consent. We would like to point out that data
          transmission on the Internet (e.g. when communicating by email) can
          have security gaps. Complete protection of data from access by third
          parties is not possible. The use of contact data published as part of
          the imprint obligation by third parties to send unsolicited
          advertising and information materials is hereby expressly prohibited.
          The operators of the website expressly reserve the right to take legal
          action in the event of unsolicited advertising information being sent,
          for example through spam emails.
        </p>

        <h2>Google Analytics</h2>
        <p>
          This website uses Google Analytics, a web analysis service provided by
          Google Inc. (''Google''). Google Analytics uses so-called ''cookies'',
          text files that are stored on your computer and that enable an
          analysis of your use of the website. The information generated by the
          cookie about your use of this website (including your IP address) is
          transmitted to a Google server in the USA and stored there. Google
          will use this information to evaluate your use of the website, to
          compile reports on website activity for website operators and to
          provide other services related to website activity and internet usage.
          Google may also transfer this information to third parties if this is
          required by law or if third parties process this data on Google's
          behalf. Google will never associate your IP address with other Google
          data. You can prevent the installation of cookies by setting your
          browser software accordingly; however, we would like to point out that
          in this case you may not be able to use all functions of this website
          to their full extent. By using this website, you consent to the
          processing of data about you by Google in the manner and for the
          purposes set out above.
        </p>
      </div>
      <div class="source">
        <p>
          Imprint by
          <a target="_blank" href="https://www.impressum-generator.de"
            >Impressum Generator</a
          >
          from
          <a
            target="_blank"
            href="https://www.kanzlei-hasselbach.de/rechtsgebiete/familienrecht/"
            >Kanzlei Hasselbach, Fachanwälte für Familienrecht</a
          >
        </p>
      </div>
  </div>
</div>

    `
}