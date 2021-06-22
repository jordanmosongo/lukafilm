const paginate = (pickedValue, currentPage) => {
  let page;
  switch (pickedValue) {
    case "right":
      page = currentPage + 1;
      break;
    case "left":
      page = currentPage + 1;
      break;
    default:
      page = pickedValue;
      break;
  }
  return page;
};

export default paginate;
