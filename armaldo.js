"use strict";

// call for Archeops
axios.get("https://fizal.me/pokeapi/api/v2/id/348.json")
  .then(response => {
    
    let data = response.data;

    let hp = data.stats[5].base_stat;
    let attack = data.stats[4].base_stat;
    let defense = data.stats[3].base_stat;

    let arrAbs = [];    
    for (let i = 0; i < response.data.abilities.length; i++){
        arrAbs.push(response.data.abilities[i].ability.name)
    };
    let abilities = arrAbs;

    let armaldo = new Pokemon(
      hp,
      attack,
      defense,
      abilities
    );

    let statText = document.querySelector(".pokemon");

    statText.innerHTML += `<p> HP:  ${armaldo.hp} </p>`;
    statText.innerHTML += `<p> Attack: ${armaldo.attack} </p>`;
    statText.innerHTML += `<p> Defense: ${armaldo.defense} </p>`;
    statText.innerHTML += `<p> Abilities: ${armaldo.abilities} </p>`;
})
