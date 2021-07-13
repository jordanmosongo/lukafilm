import React from "react";
import { useState } from "react";
import "./card.scss";
import Detail from "../detail/Detail";
import DetailModal from "../modal/DetailModal";

const linkImage = "https://image.tmdb.org/t/p/w300";

const Card = ({ movie, detailInModal }) => {
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
        <img src={linkImage + (poster_path || movie.profile_path)} alt="" />
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
          detailInModal={detailInModal}
          handleDetailFromChild={() => setDetailModal(!detailModal)}
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
