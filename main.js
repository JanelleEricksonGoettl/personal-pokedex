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
    this.abilities = abilities[i];
  }
}



let stats = new Pokemon();

// call for Archeops
axios.get("https://pokeapi.co/api/v2/pokemon/567/")
  .then(response => {
    let data = response.data;
    let hp = data.stats[5];
    let attack = data.stats[4];
    let defense = data.stats[];

    console.log(response.data);
  
  })

// // call for Armaldo
// axios.get("https://pokeapi.co/api/v2/pokemon/348/")
//   .then(response => {
    
//   })

//   // call for Rampardos
// axios.get("https://pokeapi.co/api/v2/pokemon/409/")
// .then(response => {
  
// })
