const search = (topic, maxPageNumber) => {
  let arrayResults = [];
  for (let page = 1; page <= maxPageNumber; page++) {
    fetch(
      `https://api.themoviedb.org/3/${topic}/popular?api_key=c802217348f2b02deda6d2bd90464776&language=fr&page=${page}`
    )
      .then((data) => {
        return data.json();
      })
      .then(({ results }) => {
        if (results) {
          for (let result of results) {
            arrayResults.push(result);
          }
        }
      })
      .catch((err) => console.log(err));
  }
  return arrayResults;
};
export default search;
