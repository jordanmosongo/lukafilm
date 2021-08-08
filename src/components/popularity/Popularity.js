import React, { useState } from "react";
import "./popularity.scss";
import AllApisPath from "../../Apis/AllApisPath";
import Container from "../../components/container/Container";
import Paginate from "../paginate/Paginate";
import paginate from "../../util/paginate";

const Popularity = (props) => {
  const [page, setPage] = useState(1);
  const { popular } = AllApisPath;

  return (
    <div className="tendance">
      <div className="tendance__container">
        <Container url={popular(props.topic, page)} isActor={false} />
        <Paginate
          count={500}
          paginateFromChild={(pageValue) => setPage(paginate(pageValue, page))}
        />
      </div>
    </div>
  );
};

export default Popularity;
