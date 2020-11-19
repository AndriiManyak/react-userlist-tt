const BASE_URL = 'https://api.jsonbin.io/b/5fb68f0f02f80c2af522bc69';

const request = async() => {
  const response = await fetch(BASE_URL);

  // add error handling

  return response.json();
};

export default request;
