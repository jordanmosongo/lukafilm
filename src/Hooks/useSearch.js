import { useState, useEffect } from "react";
import AllApisPath from "../Apis/AllApisPath";

const getTopic = () => {
  let topic;
  let routeUrl = window.location.pathname;
  switch (routeUrl) {
    case "/":
      topic = "movie";
      break;
    case "/films":
      topic = "movie";
      break;
    case "/series":
      topic = "tv";
      break;
    case "/acteurs":
      topic = "actors";
      break;
    default:
      break;
  }
  return topic;
};
const useSearch = (seuil, entryValue) => {
  const [moviesOrSeries, setMoviesOrSeries] = useState([]);
  const [data, setData] = useState([]);
  const [topic, setTopic] = useState("movie");
  const [limitInf, setLimitInf] = useState(1);
  const [limitSup, setLimitSup] = useState(50);
  let arr = [];
  const { search } = AllApisPath;
  let topicc = getTopic();

  if (seuil > 1) {
    setLimitInf((limitInf) => limitInf + 49);
    setLimitSup((limitSup) => limitSup + 50);
  }

  useEffect(() => {
    let url = `${search(topicc, "popular")}`;
    for (let page = limitInf; page <= limitSup; page++) {
      fetch(`${search(topic, "popular") + page}`)
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
