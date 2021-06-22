import { useState, useEffect } from "react";

const useMovieOrSerie = (url) => {
  const [moviesOrSeries, setMoviesOrSeries] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(url)
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        data.results
          ? setMoviesOrSeries([...data.results])
          : setMoviesOrSeries([...data.cast]);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, [url]);

  return { moviesOrSeries, loading };
};

export default useMovieOrSerie;
