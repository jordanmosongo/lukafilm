const apiKey = "c802217348f2b02deda6d2bd90464776";
const AllApisPath = {
  popular: (topic, page) => {
    return `https://api.themoviedb.org/3/${topic}/popular?api_key=${apiKey}&language=fr&page=${page}`;
  },
  trending: (topic) => {
    return `
    https://api.themoviedb.org/3/trending/${topic}/week?api_key=${apiKey}`;
  },
  upcoming: (topic) => {
    if (topic === "movie") {
      return `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=fr&page=10`;
    }
    return `https://api.themoviedb.org/3/tv/airing_today?api_key=${apiKey}&language=fr&page=1`;
  },
  discover: (topic, page, genderId) => {
    if (genderId !== null) {
      return `https://api.themoviedb.org/3/discover/${topic}?api_key=${apiKey}&page=${page}&with_genres=${genderId}`;
    }
    return `https://api.themoviedb.org/3/discover/${topic}?api_key=${apiKey}&page=${page}`;
  },
  gender: (topic) => {
    return `https://api.themoviedb.org/3/genre/${topic}/list?api_key=${apiKey}&language=FR`;
  },
  details: (topic, id) => {
    return `https://api.themoviedb.org/3/${topic}/${id}?api_key=${apiKey}&language=fr`;
  },
  similar: (topic, id, page) => {
    return `https://api.themoviedb.org/3/${topic}/${id}/similar?api_key=${apiKey}&language=FR&page=${page}`;
  },
  actors: (topic, id) => {
    return `https://api.themoviedb.org/3/${topic}/${id}/credits?api_key=${apiKey}&language=FR`;
  },
  search: (topic, categorie) => {
    return `https://api.themoviedb.org/3/${topic}/${categorie}?api_key=${apiKey}&language=fr&page=`;
  },
  multiSearch: (topic, query, page) => {
    return `https://api.themoviedb.org/3/search/${topic}?api_key=c802217348f2b02deda6d2bd90464776&language=en-US&query=${query}&page=${page}&include_adult=false`;
  },
};

export default AllApisPath;
