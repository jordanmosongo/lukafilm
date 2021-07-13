import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__copyright">
        <h3>
          LUKA<span>FILM</span>
        </h3>
        <p>
          Ce produit utilise l'api TMDb mais pas approuvé par cette organisation{" "}
          <br /> Tous droits réservés &copy;2021
        </p>
        <div className="developpeur">
          Développé par{" "}
          <a href="https://jordanmosongo.netlify.app/" target="_blanc">
            Jordan Mosongo
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
