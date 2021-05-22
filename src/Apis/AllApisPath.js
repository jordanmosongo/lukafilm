const apiKey = "c802217348f2b02deda6d2bd90464776";
const AllApisPath = {
  popular: (topic, page) => {
    return `https://api.themoviedb.org/3/${topic}/popular?api_key=${apiKey}&language=fr&page=${page}`;
  },
  trending: (topic) => {
    return `
    https://api.themoviedb.org/3/trending/${topic}/week?api_key=${apiKey}`;
  },
  discover: (topic, page) => {
    return `https://api.themoviedb.org/3/discover/${topic}?api_key=c802217348f2b02deda6d2bd90464776&page=${page}`;
  },
  gender: (topic) => {
    return `https://api.themoviedb.org/3/genre/${topic}/list?api_key=c802217348f2b02deda6d2bd90464776&language=FR`;
  },
};

export default AllApisPath;
