import React from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Close from "@material-ui/icons/Close";
import "./detailModal.scss";
import useStyles from "../../util/modal.configuration";
import useDetail from "../../Hooks/useDetail";
import AllApisPath from "../../Apis/AllApisPath";

const linkImage = "https://image.tmdb.org/t/p/w300";
const { details } = AllApisPath;

const DetailModal = (props) => {
  const {
    poster_path,
    profile_path,
    overview,
    title,
    name,
    original_title,
    original_name,
    id,
    character,
    release_date,
  } = props.movie;

  const {
    detail: { biography },
  } = useDetail(details("person", id));
  const { modal } = useStyles();
  const { stateValue } = props;
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={modal}
        open={stateValue}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={stateValue}>
          <div className="detail-modal">
            <div className="image-blur-modal"></div>
            <div className="content-modal">
              <Close
                className="close-modal"
                onClick={() => props.closeFromParent()}
              />
              <h2>{title || name}</h2>
              <div className="detail">
                {!character && (
                  <div className="detail__movie">
                    <img
                      src={linkImage + (poster_path || profile_path)}
                      alt=""
                    />
                  </div>
                )}
                <div className="description">
                  {!character || !original_name ? (
                    <>
                      {overview && <p>{overview}</p>}
                      {original_title && (
                        <p>
                          <span>Title d'origine</span> :{original_title}
                        </p>
                      )}
                      {release_date && (
                        <p>
                          <span>Date</span> : {release_date}
                        </p>
                      )}
                    </>
                  ) : (
                    <>
                      <p>{biography ? `${biography}` : "Aucune biographie"}</p>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default DetailModal;
