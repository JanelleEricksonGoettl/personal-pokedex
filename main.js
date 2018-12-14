"use strict";

// hp - integerx
// attack - integer
// defense - integer
// abilities - array of strings

// Archeops: https://pokeapi.co/api/v2/pokemon/567/
// Armaldo: https://pokeapi.co/api/v2/pokemon/348/
// Rampardos: https://pokeapi.co/api/v2/pokemon/409/

// let data = response.data;

// let ul = document.createElement(ul);
// let li = document.createElement(li);
// let p = document.createElement(p);


class Pokemon {
  constructor(hp, attack, defense, abilities) {
    this.hp = hp;
    this.attack = attack;
    this.defense = defense;
    this.abilities = abilities;
  }
}



// call for Archeops
axios.get("https://fizal.me/pokeapi/api/v2/id/567.json")
  .then(response => {
    
    let data = response.data;

    let hp = data.stats[5].base_stat;
    let attack = data.stats[4].base_stat;
    let defense = data.stats[3].base_stat;
    let ability1 = data.abilities[0].ability.name;
    let abilities = (ability1);

    // let abilityArray = [];
    // for (let i = 0; i < abilities.length; i++) {
    //   abilityArray.push(abilities[i].ability.name);
    // };

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
    statText.innerHTML += `<p class="stats"> ${archeops.abilities} </p>`;
})
