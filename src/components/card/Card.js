import React from "react";
import { useState } from "react";
import "./card.scss";
import Detail from "../detail/Detail";
import DetailModal from "../modal/DetailModal";
import defaultImage from "../../images/defaultImage.jpg";
import defaultActor from "../../images/defaultActor.png";

const linkImage = "https://image.tmdb.org/t/p/w300";

const Card = (props) => {
  const { movie, detailInModal, topic, isInSearchModal, isActor } = props;
  const { poster_path, id, name, character } = movie;
  const [detail, setdetail] = useState(false);
  const [detailModal, setDetailModal] = useState(false);

  return (
    <div
      className="movie-card"
      onMouseEnter={() => setdetail(true)}
      onClick={() => setdetail(true)}
      onMouseLeave={() => setdetail(false)}
    >
      <div className="movie-card__image">
        <img
          src={
            poster_path || movie.profile_path
              ? linkImage + (poster_path || movie.profile_path)
              : isActor
              ? defaultActor
              : defaultImage
          }
          alt=""
        />
      </div>
      {(character || window.location.pathname.includes("acteurs")) && (
        <div className="movie-card__names">
          <p>{name}</p>
          {character && <p className="role">rôle : {character}</p>}
        </div>
      )}

      {detail && (
        <Detail
          id={id}
          topic={topic}
          detailInModal={detailInModal}
          isInSearchModal={isInSearchModal}
          handleDetailFromChild={() => {
            setDetailModal(!detailModal);
          }}
          closeSearchModal={() => props.closeSearchModal()}
        />
      )}
      <DetailModal
        stateValue={detailModal}
        movie={movie}
        closeFromParent={() => {
          setDetailModal(!detailModal);
          setdetail(false);
        }}
      />
    </div>
  );
};

export default Card;
