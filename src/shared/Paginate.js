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

const Paginate = () => {
  const classes = useStyles();
  return (
    <div className="groupPageButton">
      <div className={classes.root}>
        <Pagination count={500} variant="outlined" shape="rounded" />
      </div>
    </div>
  );
};

export default Paginate;
