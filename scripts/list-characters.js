import { getAllCharacters } from './fetch-api.js';
import { getCharactersSearch } from './fetch-api.js';

// Element
const template = document.querySelector('#character-template');
const section = document.querySelector('section');

// Ejecucion

const renderCharacters = async (characters) => {

  section.innerHTML = "";



  characters.forEach((character) => {
    const {
      name,
      japaneseName,
      pictures,
      origin,
      race,
      gender,
      age,
      job,
      height,
      weight,
      stats,
      description,
    } = character;
    const clone = template.content.cloneNode(true);
    const h2 = clone.querySelector('h2');
    const img = clone.querySelector('img');
    const originText = clone.querySelector('#origin');
    const jobText = clone.querySelector('#job');
    const descriptionText = clone.querySelector('#description');

    h2.innerText = name;
    img.setAttribute('src', pictures[0].url);
    img.setAttribute('alt', name);
    originText.innerText = origin;
    jobText.innerText = job;
    descriptionText.innerText = description;

    section.appendChild(clone);
  });
};






const onLoaded1 = async (event) => {
  const characters = await getAllCharacters();
  renderCharacters(characters);
}


const onSearch1 = async (event) => {
  event.preventDefault();
  const texto = document.getElementById("buscadorHeroVillains").value;
  const characters = await getCharactersSearch(texto);
  
  renderCharacters(characters);
  
}

// Event
window.addEventListener('DOMContentLoaded', onLoaded1);
document.getElementById("characterSearch").addEventListener('click', onSearch1);