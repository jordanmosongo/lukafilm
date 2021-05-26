import { useState, useEffect } from "react";

const useMovieOrSerie = (url) => {
  const [moviesOrSeries, setMoviesOrSeries] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(url)
      .then((data) => {
        return data.json();
      })
      .then(({ results }) => {
        setMoviesOrSeries([...results]);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, [url]);

  return { moviesOrSeries, loading };
};

export default useMovieOrSerie;
