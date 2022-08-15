document.querySelector("#submit").addEventListener("click", getPokemon);

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function lowerCaseName(string) {
  return string.toLowerCase();
}

function getPokemon(e) {
  const name = document.querySelector("#pokémon_name").value;
  const pokémon_name = lowerCaseName(name);

  fetch(`https://pokeapi.co/api/v2/pokemon/${pokémon_name}`)
    .then((response) => response.json())
    .then((data) => {
      document.querySelector(".pokémonBox").innerHTML = `
      <div>
        <img
          src="${data.sprites.other["official-artwork"].front_default}"
        />
      </div>
      <div class="pokémonInfo">
        <h1>${capitalizeFirstLetter(data.name)}</h3>
        <p>Type: ${data['types'][0]['type']['name']}</p>
        <p>Ability: ${data['abilities'][0]['ability']['name']}</p>
      </div>`;
    })

  e.preventDefault();
}