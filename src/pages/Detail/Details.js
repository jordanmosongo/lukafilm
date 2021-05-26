import React from "react";
import "./detail.scss";
import AllApisPath from "../../Apis/AllApisPath";
import useDetail from "../../Hooks/useDetail";
import Container from "../../shared/Container";

const linkImage = "https://image.tmdb.org/t/p/w500";

const BannerElement = ({ image }) => {
  return (
    <div className="banner-image">
      <img src={`${linkImage}${image}`} alt="" />
    </div>
  );
};

const Details = () => {
  const { details, similar, actors } = AllApisPath;
  const { detail } = useDetail(details("movie", 460465));
  console.log(detail);
  const {
    title,
    poster_path,
    profile_path,
    original_title,
    overview,
    budget,
    revenue,
  } = detail;
  return (
    <div className="banner-detail">
      <BannerElement image={poster_path || profile_path} />
      <div className="banner-detail__overlay"></div>
      <div className="banner-detail__text">
        <div className="detail">
          <div className="movie">
            <img src={linkImage + detail.poster_path} alt="" />
          </div>
          <div className="description">
            <div>
              <h3>{title}</h3>
            </div>

            <p>{overview}</p>
            <p>
              <span>Title d'origine</span> : {`${original_title}`}
            </p>
            <p>
              <span>Budget</span> : {`${budget}$`}
            </p>
            <p>
              <span>revenu</span> : {`${revenue}$`}
            </p>
          </div>
        </div>
        <div className="actor">
          <h2>Acteurs</h2>
          <Container url={actors("movie", 460465)} limit={10} />
        </div>
        <div className="similaire">
          <h2>Films similaires</h2>
          <Container url={similar("movie", 460465, 1)} limit={5} />
        </div>
      </div>
    </div>
  );
};

export default Details;
