

export const getGif = () => {
  return fetch()
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
