const BASE_URL = 'https://www.moogleapi.com/api/v1';

export const getAllGames = async () => {
  const response = await fetch(`${BASE_URL}/games`);
  return await response.json();
};
