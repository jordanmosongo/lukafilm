import { useState, useEffect } from "react";
import AllApisPath from "../Apis/AllApisPath";
const useSearch = (maxNumberOfPage, entryValue) => {
  const [moviesOrSeries, setMoviesOrSeries] = useState([]);
  const [data, setData] = useState([]);
  let arr = [];
  const { search } = AllApisPath;
  useEffect(() => {
    for (let page = 1; page <= maxNumberOfPage; page++) {
      fetch(`${search("movie", "popular") + page}`)
        .then((data) => {
          return data.json();
        })
        .then(({ results }) => {
          for (let result of results) {
            arr.push(result);
          }
          setData([...arr]);
        })
        .catch((err) => console.log(err));
    }
    const exp = new RegExp(entryValue, "i");
    const tempArray = [...data];
    const filteredData = tempArray.filter((movie) => {
      return exp.test(movie.title) && movie;
    });
    setMoviesOrSeries([...filteredData]);
  }, [entryValue]);
  if (entryValue.length < 3) return [];
  return moviesOrSeries;
};
export default useSearch;
