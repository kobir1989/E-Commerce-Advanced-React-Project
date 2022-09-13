const BASE_URL = 'https://fakestoreapi.com';
const fetchFromAPI = async (url) => {
  const response = await fetch(`${BASE_URL}/${url}`);
  const data = await response.json();
  return data;
};
export default fetchFromAPI;
