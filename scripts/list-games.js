import { getAllGames } from './fetch-api.js';

// Element
const template = document.querySelector('#game-template');
const section = document.querySelector('section');

// Ejecucion

const renderGames = async (event) => {
  const games = await getAllGames();

  games.forEach((game) => {
    const { title, picture, platform, releaseDate, description } = game;
    const clone = template.content.cloneNode(true);
    const h2 = clone.querySelector('h2');
    const img = clone.querySelector('img');
    const platformText = clone.querySelector('#platform');
    const releaseDateText = clone.querySelector('#releaseDate');
    const descriptionText = clone.querySelector('#description');

    h2.innerText = title;
    img.setAttribute('src', picture);
    img.setAttribute('alt', title);
    platformText.innerText = platform;
    releaseDateText.innerText = releaseDate;
    descriptionText.innerText = description;

    section.appendChild(clone);
  });
};

// Event
window.addEventListener('DOMContentLoaded', renderGames);
