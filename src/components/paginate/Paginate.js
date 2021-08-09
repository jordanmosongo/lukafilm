import React, { useState } from "react";
import Pagination from "@material-ui/lab/Pagination";
import { makeStyles } from "@material-ui/core/styles";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import "./paginate.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2),
    },
  },
}));

const Paginate = (props) => {
  const [page, setPage] = useState(1);
  const classes = useStyles();
  const handlePaginate = (event) => {
    let pageValue;
    if (event.target.textContent) {
      pageValue = event.target.textContent;
    } else {
      const arrBtn = event.target.children[0].getAttribute("d");
      arrBtn === "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
        ? (pageValue = "right")
        : (pageValue = "left");
    }
    props.paginateFromChild(pageValue);
  };
  return (
    <div className="groupPageButton">
      <div className={classes.root} id="pagination">
        <Pagination
          count={props.count}
          variant="outlined"
          shape="rounded"
          onChange={handlePaginate}
        />
      </div>
      <div className="pages">
        <ArrowBackIosIcon
          className="page-icon"
          onClick={() => {
            setPage((page) => (page > 1 ? page - 1 : 1));
            props.paginateFromChild(page);
          }}
        />
        <span>{`page ${page}/500`}</span>
        <ArrowForwardIosIcon
          className="page-icon"
          onClick={() => {
            setPage((page) => (page > 1 ? page + 1 : 1));
            props.paginateFromChild(page);
          }}
        />
      </div>
    </div>
  );
};

export default Paginate;
