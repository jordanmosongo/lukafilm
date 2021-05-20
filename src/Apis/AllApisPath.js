const AllApisPath = {
  popular: function (topic, page) {
    return `https://api.themoviedb.org/3/${topic}/popular?api_key=c802217348f2b02deda6d2bd90464776&language=fr&page=${page}`;
  },
  trending: function (topic) {
    return `
    https://api.themoviedb.org/3/trending/${topic}/week?api_key=c802217348f2b02deda6d2bd90464776`;
  },
};

export default AllApisPath;
