import React from "react";
import "../scss/footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__description">
        <div className="description__container"></div>
      </div>
      <div className="footer__copyright">
        <p>
          Tous droits réservés &copy;2021 lukafilm <br /> développé par{" "}
          <a href="https://jordanmosongo.netlify.app/">jordan mosongo</a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
