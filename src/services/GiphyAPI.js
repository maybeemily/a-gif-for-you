export const getGif = (searchTerm) => {
  return fetch(`https://api.giphy.com/v1/gifs/random?tag=${searchTerm}&api_key=${process.env.API_KEY}`)
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) {
        throw 'Error fetching data, try again';
      } else
      {
        return json;
      }
    })
    .then((data) => ({
      imageURL: data.data.image_original_url,
      url: data.data.url,
      title: data.data.title
    }));
};
