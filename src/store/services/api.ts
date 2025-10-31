const API_URL = 'https://randomuser.me/api/?inc=picture';

export const getRandomUserPhoto = async (name: string) => {
  const response = await fetch(`${API_URL}&seed=${name}`);
  if (!response.ok) {
    throw new Error('Failed to fetch random user photo');
  }
  const data = await response.json();
  return data.results[0].picture.thumbnail;
};
