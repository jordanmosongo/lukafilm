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
      return "movie";
  }
};
const useSearch = (seuil, entryValue) => {
  const [moviesOrSeries, setMoviesOrSeries] = useState([]);
  const [data, setData] = useState([]);
  const [limitInf, setLimitInf] = useState(1);
  const [limitSup, setLimitSup] = useState(50);
  let arr = [];
  const { search } = AllApisPath;

  if (seuil > 1) {
    setLimitInf((limitInf) => limitInf + 49);
    setLimitSup((limitSup) => limitSup + 50);
  }

  useEffect(() => {
    for (let page = limitInf; page <= limitSup; page++) {
      fetch(`${search(getTopic(), "popular") + page}`)
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
      return exp.test(movie.title || movie.name) && movie;
    });
    setMoviesOrSeries([...filteredData]);
  }, [entryValue]);
  if (entryValue.length < 3) return [];
  return moviesOrSeries;
};
export default useSearch;
