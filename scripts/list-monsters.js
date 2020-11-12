import { getAllMonsters } from './fetch-api.js';

// Element
const template = document.querySelector('#monster-template');
const section = document.querySelector('section');

// Ejecucion

const renderMonsters = async (event) => {
  const monsters = await getAllMonsters();

  monsters.forEach((monster) => {
    const { name, japaneseName, elementalAffinity, elementalWeakness, hitPoints, manaPoints, attack, defense, picture, description  } = monster;
    const clone = template.content.cloneNode(true);
    const h2 = clone.querySelector('h2');
    const img = clone.querySelector('img');
    const japaneseNameText = clone.querySelector('#japaneseName');
    const elementalWeaknessText = clone.querySelector('#elementalWeakness');
    const hitpointsText = clone.querySelector('#hitPoints');
    const manaPointsText = clone.querySelector('#manaPoints');
    const attackText = clone.querySelector('#attack');
    const defenseText = clone.querySelector('#defense');
    const descriptionText = clone.querySelector('#description');

    h2.innerText = name;
    img.setAttribute('src', picture);
    img.setAttribute('alt', name);
    japaneseNameText.innerText = japaneseName;
    elementalAffinity.innerText = elementalAffinity;
    elementalWeaknessText.innerText = elementalWeakness;
    hitpointsText.innerText = hitPoints;
    manaPointsText.innerText = manaPoints;
    attackText.innerText = attack;
    defenseText.innerText = defense;
    descriptionText.innerText = description;

    section.appendChild(clone);
  });
};

// Event
window.addEventListener('DOMContentLoaded', renderMonsters);
