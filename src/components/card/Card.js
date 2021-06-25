import React from "react";
import { useState } from "react";
import "./card.scss";
import Detail from "../detail/Detail";
import DetailModal from "../modal/DetailModal";

const linkImage = "https://image.tmdb.org/t/p/w300";

const Card = ({ movie }) => {
  const { poster_path, id } = movie;
  const [detail, setdetail] = useState(false);
  const [detailModal, setDetailModal] = useState(false);
  return (
    <div
      className="movie-card"
      onMouseEnter={() => setdetail(true)}
      onMouseLeave={() => setdetail(false)}
    >
      <div className="movie-card__image">
        <img src={linkImage + (poster_path || movie.profile_path)} alt="" />
      </div>
      {detail && (
        <Detail
          id={id}
          handleDetailFromChild={() => setDetailModal(!detailModal)}
        />
      )}
      <DetailModal
        stateValue={detailModal}
        movie={movie}
        closeFromParent={() => setDetailModal(!detailModal)}
      />
    </div>
  );
};

export default Card;
