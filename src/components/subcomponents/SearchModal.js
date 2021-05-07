import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Close from "@material-ui/icons/Close";
import "../../scss/modal.scss";
import SearchBox from "./SearchBox";
import { SearchSharp } from "@material-ui/icons";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    position: "relative",
    backgroundColor: "white",
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));
const SearchModal = (props) => {
  const { modalState } = props;
  console.log(props.entry);
  const [entryValue, setentryValue] = useState(props.entry);
  const classes = useStyles();
  console.log(entryValue);
  const closeModal = () => {
    props.closeModalFromChild();
  };
  const typingMethod = (event) => {
    event.preventDefault();
    let value = event.target.value;
    setentryValue(value);
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={modalState}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={modalState}>
          <div className={classes.paper}>
            <div className="back-image"></div>
            <div className="image-blur"></div>
            <div className="content">
              <Close className="close-modal" onClick={closeModal} />
              <h2>Zone de recherche</h2>
              <div className="banner__input">
                <input
                  type="text"
                  placeholder="Tapez votre recherche"
                  defaultValue={entryValue}
                  onChange={typingMethod}
                />
                <button>
                  <SearchSharp className="searchIcon" />
                </button>
              </div>
              <div className="result">
                <p>
                  <span>0</span> resultats pour {`"${entryValue}"`}
                </p>
              </div>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default SearchModal;
