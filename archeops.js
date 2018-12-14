"use strict";

// call for Archeops
axios.get("https://fizal.me/pokeapi/api/v2/id/567.json")
  .then(response => {
    
    let data = response.data;

    let hp = data.stats[5].base_stat;
    let attack = data.stats[4].base_stat;
    let defense = data.stats[3].base_stat;
    let abilities = data.abilities[0].ability.name;
    

    let archeops = new Pokemon(
      hp,
      attack,
      defense,
      abilities
    );

    let statText = document.querySelector(".pokemon");

    statText.innerHTML += `<p class="stats"> ${archeops.hp} </p>`;
    statText.innerHTML += `<p class="stats"> ${archeops.attack} </p>`;
    statText.innerHTML += `<p class="stats"> ${archeops.defense} </p>`;
    statText.innerHTML += `<p> ability ${archeops.abilities} </p>`;
})
