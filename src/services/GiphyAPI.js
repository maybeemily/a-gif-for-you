import process from 'dotenv';

const APIKEY = process.env.API_KEY;

export const getGifs = () => {
  return fetch(`https://api.giphy.com/v1/gifs/random?api_key=${APIKEY}`)
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) {
        throw 'Unable to fetch random gif, try again';
      } else
      {
        return json;
      }
    });
};
