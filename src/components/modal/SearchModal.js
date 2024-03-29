import React from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Close from "@material-ui/icons/Close";
import { SearchSharp } from "@material-ui/icons";
import { useState } from "react";
import "./modal.scss";
import Button from "../bouton/Button";
import useStyles from "../../util/modal.configuration";
import useSearch from "../../Hooks/useSearch";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Card from "../card/Card";

const SearchModal = (props) => {
  const { modalState, entry, closeModalFromChild } = props;
  const val = entry.toString();
  const [entryValue, setEntryValue] = useState(val);
  const { modal, paper } = useStyles();
  const [page, setPage] = useState(1);

  const moviesOrSeries = useSearch(page, entryValue);
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={modal}
        open={modalState}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={modalState}>
          <div className={paper}>
            <div className="back-image"></div>
            <div className="image-blur"></div>
            <div className="content">
              <Close
                className="close-modal"
                onClick={() => closeModalFromChild()}
              />
              <h2>Zone de recherche</h2>
              <div className="results">
                <div className="results__input">
                  <input
                    type="text"
                    placeholder="Tapez votre recherche"
                    defaultValue={entryValue}
                    onChange={(event) => setEntryValue(event.target.value)}
                  />
                  <Button content={<SearchSharp className="searchIcon" />} />
                </div>
              </div>
              {entryValue.length < 3 ? (
                <p>continuer votre recherche</p>
              ) : (
                <div className="results__title">
                  <p>
                    <span>{moviesOrSeries.length}</span> resultats{" "}
                    <span className="resultat">
                      sur 1000 pour {`${entryValue}`}
                    </span>
                  </p>
                  <div className="pages">
                    <ArrowBackIosIcon
                      className="page-icon"
                      onClick={() =>
                        setPage((page) => (page > 1 ? page - 1 : 1))
                      }
                    />
                    <span>{`page ${page}/5`}</span>
                    <ArrowForwardIosIcon
                      className="page-icon"
                      onClick={() =>
                        setPage((page) => (page < 5 ? page + 1 : 5))
                      }
                    />
                  </div>
                </div>
              )}
              <div className="results__body">
                <div className="movie-card-container">
                  {moviesOrSeries.map((movie) => {
                    return <Card movie={movie} />;
                  })}
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};
export default SearchModal;
