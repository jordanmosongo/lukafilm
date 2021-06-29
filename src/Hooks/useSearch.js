import { useState, useEffect } from "react";
import AllApisPath from "../Apis/AllApisPath";

const getTopic = () => {
  switch (window.location.pathname) {
    case "/films":
      return "movie";
    case "/series":
      return "tv";
    case "/acteurs":
      return "person";
    default:
      return "multi";
  }
};
const useSearch = (entryValue) => {
  const [moviesOrSeries, setMoviesOrSeries] = useState([]);
  let arr = [];
  const { multiSearch } = AllApisPath;

  useEffect(() => {
    for (let page = 1; page <= 15; page++) {
      fetch(`${multiSearch(getTopic(), entryValue, page)}`)
        .then((data) => {
          return data.json();
        })
        .then(({ results }) => {
          for (let result of results) {
            arr.push(result);
          }
          setMoviesOrSeries([...arr]);
        })
        .catch((err) => console.log(err));
    }
  }, [entryValue]);
  if (entryValue.length < 3) return [];
  return moviesOrSeries;
};
export default useSearch;
