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
    const raceText = clone.querySelector('#race');
    const genderText = clone.querySelector('#gender');
    const ageText = clone.querySelector('#age');
    const jobText = clone.querySelector('#job');
    const heightText = clone.querySelector('#height');
    const weightText = clone.querySelector('#weight');
    const statsText = clone.querySelector('#stats');
    const descriptionText = clone.querySelector('#description');

    h2.innerText = name;
    img.setAttribute('src', pictures);
    img.setAttribute('alt', name);
    japaneseNameText.innerText = japaneseName;
    originText.innerText = origin;
    raceText.innetText = race;
    genderText.innerText = gender;
    ageText.innerText = age;
    jobText.innerText = job;
    heightText.innerText = height;
    weightText.innerText = weight;
    statsText.innetText = stats;
    descriptionText.innerText = description;

    section.appendChild(clone);
  });
};

// Event
window.addEventListener('DOMContentLoaded', renderCharacters);
