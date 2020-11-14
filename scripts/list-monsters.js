import { getAllMonsters } from './fetch-api.js';
import { getMonstersSearch } from './fetch-api.js';

// Element
const template = document.querySelector('#monster-template');
const section = document.querySelector('section');

// Ejecucion

const renderMonsters = async (monsters) => {

  section.innerHTML = "";



  monsters.forEach((monster) => {
    const { name,
      japaneseName,
      elementalAffinity,
      elementalWeakness,
      hitPoints,
      manaPoints,
      attack,
      defense,
      picture,
      description,
    } = monster;
    const clone = template.content.cloneNode(true);
    const h2 = clone.querySelector('h2');
    const img = clone.querySelector('img');
    const elementalAffinityText = clone.querySelector('#elementalAffinity');
    const elementalWeaknessText = clone.querySelector('#elementalWeakness');
    const hitPointsText = clone.querySelector('#hitPoints');
    const manaPointsText = clone.querySelector('#manaPoints');
    const attackText = clone.querySelector('#attack');
    const defenseText = clone.querySelector('#defense');
    const descriptionText = clone.querySelector('#description');

    h2.innerText = name;
    img.setAttribute('src', picture);
    img.setAttribute('alt', name);
    elementalAffinityText.innerText = elementalAffinity;
    elementalWeaknessText.innerText = elementalWeakness;
    hitPointsText.innerText = hitPoints;
    manaPointsText.innerText = manaPoints;
    attackText.innerText = attack;
    defenseText.innerText = defense;
    descriptionText.innerText = description;

    section.appendChild(clone);
  });
};




const onLoaded2 = async (event) => {
  const monsters = await getAllMonsters();
  renderMonsters(monsters);
}


const onSearch2 = async (event) => {
  event.preventDefault();
  const texto = document.getElementById("buscadorMonster").value;
  const monsters = await getMonstersSearch(texto);
  
  renderMonsters(monsters);
  
}
// Event
window.addEventListener('DOMContentLoaded', onLoaded2);

document.getElementById("monsterSearch").addEventListener('click', onSearch2);
