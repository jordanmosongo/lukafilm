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
  return (
    <div className="groupPageButton">
      <div className={classes.root}>
        <Pagination
          count={500}
          variant="outlined"
          shape="rounded"
          onChange={(event) => {
            console.log(event.target.textContent);
            console.log(event.target);
            // props.handlePaginate(event.target.textContent);
          }}
        />
      </div>
    </div>
  );
};

export default Paginate;
