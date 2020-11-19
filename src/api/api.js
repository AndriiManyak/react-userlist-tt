const BASE_URL = 'https://api.jsonbin.io/b/5fb67d5a4144f562a5f04fa0/2';

export const request = async() => {
  const response = await fetch(BASE_URL);

  // add error handling

  return response.json();
};
