import { getAllCharacters } from './fetch-api.js';

// Element
const template = document.querySelector('#character-template');
const section = document.querySelector('section');

// Ejecucion

const renderCharacters = async (event) => {
  const characters = await getAllCharacters();

  characters.forEach((character) => {
    const { name, japaneseName, pictures, origin, race, gender, age, job, height, weight, stats, description } = character;
    const clone = template.content.cloneNode(true);
    const h2 = clone.querySelector('h2');
    const img = clone.querySelector('img');
    const japaneseNameText = clone.querySelector('#japaneseName');
    const originText = clone.querySelector('#origin');
    const jobText = clone.querySelector('#job');
    const descriptionText = clone.querySelector('#description');

    h2.innerText = name;
    img.setAttribute('src', pictures.url);
    img.setAttribute('alt', name);
    japaneseNameText.innerText = japaneseName;
    originText.innerText = origin;
    jobText.innerText = job;
    descriptionText.innerText = description;

    section.appendChild(clone);
  });
};

// Event
window.addEventListener('DOMContentLoaded', renderCharacters);
