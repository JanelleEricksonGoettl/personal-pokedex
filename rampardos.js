"use strict";

// call for Rampardos
axios.get("https://fizal.me/pokeapi/api/v2/id/409.json")
  .then(response => {
    
    let data = response.data;

    let hp = data.stats[5].base_stat;
    let attack = data.stats[4].base_stat;
    let defense = data.stats[3].base_stat;
    let abilities = data.abilities[0, 1].ability.name;
    

    let rampardos = new Pokemon(
      hp,
      attack,
      defense,
      abilities
    );

    let statText = document.querySelector(".pokemon");

    statText.innerHTML += `<p class="stats"> ${rampardos.hp} </p>`;
    statText.innerHTML += `<p class="stats"> ${rampardos.attack} </p>`;
    statText.innerHTML += `<p class="stats"> ${rampardos.defense} </p>`;
    statText.innerHTML += `<p> ability ${rampardos.abilities} </p>`;
})
