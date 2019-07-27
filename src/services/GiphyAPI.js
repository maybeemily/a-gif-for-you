

export const getGif = () => {
  return fetch(`https://api.giphy.com/v1/gifs/random?api_key=${process.env.API_KEY}`)
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) {
        throw 'No gifs with that tag, try again';
      } else
      {
        return json;
      }
    })
    .then((data) => ({
      image: data.image_url
    }));
    
    
};
