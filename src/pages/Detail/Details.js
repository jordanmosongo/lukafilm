import React, { useState } from "react";
import "./detail.scss";
import AllApisPath from "../../Apis/AllApisPath";
import useDetail from "../../Hooks/useDetail";
import Container from "../../components/container/Container";
import StarIcon from "@material-ui/icons/Star";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import Paginate from "../../components/paginate/Paginate";
import paginate from "../../util/paginate";

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
    topic: `${
      arr[1] === "films" ? "movie" : arr[1] === "series" ? "tv" : "person"
    }`,
  };
};

const Details = () => {
  const { id, topic } = getId();
  const { details, similar, actors } = AllApisPath;
  const { detail } = useDetail(details(topic, id));
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  const {
    title,
    name,
    biography,
    poster_path,
    profile_path,
    backdrop_path,
    original_title,
    overview,
    budget,
    revenue,
    vote_average,
    release_date,
  } = detail;

  const vote = [];
  for (let i = 1; i < Math.floor(vote_average); i++) {
    vote.push(i);
  }
  return (
    <>
      <div className="banner-detail">
        <BannerElement image={backdrop_path || profile_path} />
        <div className="banner-detail__overlay"></div>
        <div className="banner-detail__text">
          <div className="detail">
            <div className="movie">
              <img src={linkImage + (poster_path || profile_path)} alt="" />
            </div>
            <div className="description">
              <h3>{title || name || "titre non fourni"}</h3>

              <p>{overview || biography || "description indisponible"}</p>
              {topic !== "person" && (
                <>
                  <p>
                    <span>Title d'origine</span> :{" "}
                    {original_title
                      ? `${original_title}`
                      : "donnée indisponible"}
                  </p>
                  <p>
                    <span>Budget</span> :{" "}
                    {budget ? `${budget}$` : "donnée indisponible"}
                  </p>
                  <p>
                    <span>revenu</span> :{" "}
                    {revenue ? `${revenue}$` : "donnée indisponible"}
                  </p>
                  <p>
                    <span>release date</span> :{" "}
                    {release_date ? `${release_date}` : "donnée indisponible"}
                  </p>
                  <p>
                    <span>
                      {vote.map((item) => {
                        return <StarIcon />;
                      })}
                      {vote_average > vote.length && <StarHalfIcon />}
                    </span>
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="content-detail">
        <div className="container-detail">
          <div className="actor">
            <h2>{`${
              topic === "person"
                ? "Quelques réalisations"
                : "Acteurs principaux"
            }`}</h2>
            <Container
              url={actors(topic, id)}
              limit={limit}
              detailModal={true}
              topic={topic}
            />
            <div className="container-detail__action">
              {limit > 10 && (
                <button onClick={() => setLimit((limit) => limit - 5)}>
                  Voir moins
                </button>
              )}
              {limit <= 40 && (
                <button onClick={() => setLimit((limit) => limit + 5)}>
                  Voir plus
                </button>
              )}
            </div>
          </div>
          {topic !== "person" && (
            <div className="similaire">
              <h2>{topic === "movie" ? "Films" : "Séries"} similaires</h2>
              <Container url={similar(topic, id, page)} />
              <Paginate
                count={3}
                paginateFromChild={(pageValue) =>
                  setPage(paginate(pageValue, page))
                }
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Details;
