const BASE_URL = 'https://www.moogleapi.com/api/v1';

export const getAllGames = async () => {
  const response = await fetch(`${BASE_URL}/games`);
  return await response.json();
};

export const getAllCharacters = async () => {
  const response = await fetch(`${BASE_URL}/characters`);
  return await response.json();
};

export const getAllMonsters = async () => {
  const response = await fetch(`${BASE_URL}/monsters`);
  return await response.json();
};


export const getMonstersSearch = async (search) => {
  const response = await fetch(`${BASE_URL}/monsters/search?name=${search}`);
  return await response.json();
};

export const getCharactersSearch = async (search) => {
  const response = await fetch(`${BASE_URL}/characters/search?name=${search}`);
  return await response.json();
};
