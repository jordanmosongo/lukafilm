import React, { useState } from "react";
import Banner from "../../components/banner-shared/Banner";
import Title from "../../components/title/Title";
import Container from "../../components/container/Container";
import Paginate from "../../components/paginate/Paginate";
import AllApisPath from "../../Apis/AllApisPath";
import Action from "../../components/action/Action";
import paginate from "../../util/paginate";
import ActionMobile from "../../components/action-mobile/ActionMobile";

const Series = () => {
  const { discover, trending } = AllApisPath;
  const [page, setPage] = useState(1);
  const [genderId, setGenderId] = useState(null);
  const [title, setTitle] = useState("Toutes les séries");
  return (
    <div>
      <Banner
        firstText="A la recherche "
        secondText="des séries "
        url={trending("tv")}
      />
      <div className="films">
        <div className="action">
          <Action
            topic="tv"
            loadInitialData={() => {
              setGenderId(null);
              setTitle("Toutes les séries");
            }}
            filterByGender={(id, name) => {
              setGenderId(id);
              setTitle(name);
            }}
          />
        </div>
        <div className="container">
          <div className="container__title">
            <Title titre={title} />
            <ActionMobile
              topic="tv"
              manipulate={(name, id) => {
                setTitle(name);
                setGenderId(id);
              }}
            />
          </div>
          <Container url={discover("tv", page, genderId)} isActor={false} />
          <Paginate
            count={500}
            paginateFromChild={(pageValue) =>
              setPage(paginate(pageValue, page))
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Series;
