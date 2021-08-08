import { useState, useEffect } from "react";
import AllApisPath from "../Apis/AllApisPath";

const getTopic = () => {
  const path = window.location.pathname;
  if (path.indexOf("films") !== -1) return "movie";
  if (path.indexOf("series") !== -1) return "tv";
  if (path.indexOf("acteurs") !== -1) return "person";
  return "multi";
};
const useSearch = (entryValue) => {
  const [moviesOrSeries, setMoviesOrSeries] = useState([]);
  const { multiSearch } = AllApisPath;
  useEffect(() => {
    fetch(`${multiSearch(getTopic(), entryValue, 1)}`)
      .then((data) => data.json())
      .then(({ results }) => setMoviesOrSeries(results))
      .catch((err) => console.log(err));
  }, [entryValue]);
  if (entryValue.length < 3) return [];
  return moviesOrSeries;
};
export default useSearch;
