const url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/iplocate/address?ip=";
const API_KEY = '3403f978625b46f2052d4e9dbbf08eb6fa06ee19'
const token = "3403f978625b46f2052d4e9dbbf08eb6fa06ee19";
const query = "46.226.227.20";

const options = {
  method: "GET",
  mode: "cors",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "Authorization": "Token " + token
  }
}

fetch(url + query, options)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log("error", error));

const getLocation = async () => {
  const response = await fetch(url + query, options);
  return response.json()
}

export default getLocation