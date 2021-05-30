import React from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Close from "@material-ui/icons/Close";
import { SearchSharp } from "@material-ui/icons";
import { useState } from "react";
import "../scss/modal.scss";
import Button from "./Button";
import useStyles from "../util/modal.configuration";
import useSearch from "../Hooks/useSearch";
const linkImage = "https://image.tmdb.org/t/p/w300";

const Card = ({ movie }) => {
  const { backdrop_path, title } = movie;
  return (
    <div className="movie-cardd">
      <div className="movie-card__image">
        <img src={linkImage + (backdrop_path || movie.profile_path)} alt="" />
        <h3>{title}</h3>
      </div>
    </div>
  );
};

const SearchModal = (props) => {
  const { modalState, entry, closeModalFromChild } = props;
  const val = entry.toString();
  const [entryValue, setEntryValue] = useState(val);
  const { modal, paper } = useStyles();

  const moviesOrSeries = useSearch(200, entryValue);
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
              <div className="banner__input">
                <div>
                  <input
                    type="text"
                    placeholder="Tapez votre recherche"
                    defaultValue={entryValue}
                    onChange={(event) => setEntryValue(event.target.value)}
                  />
                  <Button content={<SearchSharp className="searchIcon" />} />
                </div>
                {entryValue.length >= 3 && (
                  <p>
                    <span>{moviesOrSeries.length}</span> resultats pour{" "}
                    {`"${entryValue}"`}
                  </p>
                )}
                {entryValue.length < 3 && <p>continuer votre recherche</p>}
              </div>
              <div className="result">
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
