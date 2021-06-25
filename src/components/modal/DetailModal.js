import React from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Close from "@material-ui/icons/Close";
import "./detailModal.scss";
import useStyles from "../../util/modal.configuration";

const linkImage = "https://image.tmdb.org/t/p/w300";

const DetailModal = (props) => {
  const { poster_path, overview, title } = props.movie;
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
            <div className="back-image-modal"></div>
            <div className="image-blur-modal"></div>
            <div className="content-modal">
              <Close
                className="close-modal"
                onClick={() => props.closeFromParent()}
              />
              <h2>{title}</h2>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default DetailModal;
