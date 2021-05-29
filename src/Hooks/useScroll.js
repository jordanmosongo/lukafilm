import { useState } from "react";

const useScroll = () => {
  const [background, setBackground] = useState(false);
  window.onscroll = () => {
    let point = document.body.scrollTop || document.documentElement.scrollTop;
    point > 120 ? setBackground(true) : setBackground(false);
  };
  return background;
};
export default useScroll;
