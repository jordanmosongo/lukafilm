import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__copyright">
        <img
          class="tmbd-logo"
          src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_1-8ba2ac31f354005783fab473602c34c3f4fd207150182061e425d366e4f34596.svg"
          alt="logo the movie data base"
        ></img>
        <p>
          Ce produit utilise l'api TMDb <br /> Lukafilm &copy;2021 développé par{" "}
          <a href="https://jordanmosongo.netlify.app/">jordan mosongo</a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
