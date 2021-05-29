import React from "react";
import Pagination from "@material-ui/lab/Pagination";
import { makeStyles } from "@material-ui/core/styles";
import "../scss/paginate.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2),
    },
  },
}));

const Paginate = (props) => {
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
      <div className={classes.root}>
        <Pagination
          count={props.count}
          variant="outlined"
          shape="rounded"
          onChange={handlePaginate}
        />
      </div>
    </div>
  );
};

export default Paginate;
