import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import "./detail.scss";
import { topicContext } from "../../pages/Home/Home";

const setUrl = (pathname, id) => {
  const arr = pathname.split("/");
  if (arr.length === 2) {
    return `${pathname}/${id}`;
  } else {
    arr.pop();
    return `${arr.join("/")}/${id}`;
  }
};

const Detail = (props) => {
  const topic = useContext(topicContext);
  const { id, detailInModal } = props;
  const history = useHistory();
  const currentUrl = window.location.pathname;

  const handleDetail = () => {
    if (currentUrl === "/" || detailInModal) {
      props.handleDetailFromChild();
    } else {
      props.isInSearchModal && props.closeSearchModal();
      history.push(setUrl(currentUrl, id));
    }
  };
  const seeMore = () => {
    history.push(`${topic === "movie" ? "films" : "series"}/${id}`);
    props.isInSearchModal && props.closeSearchModal();
  };
  return (
    <div className="movie-card__effect">
      <div className="movie-card__over-effect"></div>
      <div className="movie-card__over-content">
        <button data-aos="fade-right" onClick={handleDetail}>
          voir détail
        </button>
        {currentUrl === "/" && (
          <button data-aos="fade-left" onClick={seeMore}>
            en voir plus
          </button>
        )}
      </div>
    </div>
  );
};
export default Detail;
