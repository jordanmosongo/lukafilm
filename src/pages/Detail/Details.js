import React from "react";
import "./detail.scss";
import AllApisPath from "../../Apis/AllApisPath";
import useDetail from "../../Hooks/useDetail";
import Container from "../../components/container/Container";
import StarIcon from "@material-ui/icons/Star";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import Paginate from "../../components/paginate/Paginate";

const linkImage = "https://image.tmdb.org/t/p/w500";

const BannerElement = ({ image }) => {
  return (
    <div className="banner-image">
      <img src={`${linkImage}${image}`} alt="" />
    </div>
  );
};
const getId = () => {
  const arr = window.location.pathname.split("/");
  return {
    id: arr[arr.length - 1],
    topic: `${arr[1] === "films" ? "movie" : "tv"}`,
  };
};

const Details = () => {
  const { id, topic } = getId();
  const { details, similar, actors } = AllApisPath;
  const { detail } = useDetail(details(topic, id));

  const {
    title,
    poster_path,
    profile_path,
    original_title,
    overview,
    budget,
    revenue,
    vote_average,
    production_companies,
  } = detail;
  console.log(production_companies);
  const vote = [];
  for (let i = 1; i < Math.floor(vote_average); i++) {
    vote.push(i);
  }
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
            <p>
              <span>
                {vote.map((item) => {
                  return <StarIcon />;
                })}
                {vote_average > vote.length && <StarHalfIcon />}
              </span>
            </p>
          </div>
        </div>
        <div className="actor">
          <h2>Acteurs et actrices</h2>
          <Container url={actors(topic, id)} limit={5} />
          <Paginate count={4} />
        </div>
        <div className="similaire">
          <h2>{topic === "movie" ? "Films" : "Séries"} similaires</h2>
          <Container url={similar(topic, id, 1)} limit={5} />
          <Paginate count={4} />
        </div>
      </div>
    </div>
  );
};

export default Details;
