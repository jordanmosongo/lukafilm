import React from "react";
import "../scss/footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__description">
        <div className="description__container">
          <div className="description__logo">
            <h2>Lukafilm</h2>
          </div>
          <div className="description__links">
            <ul>
              <li className="link-item">
                <a>Accueil</a>
              </li>
              <li className="link-item">
                <a>Films</a>
              </li>
              <li className="link-item">
                <a>Series</a>
              </li>
              <li className="link-item">
                <a>Nouvelles</a>
              </li>
            </ul>
          </div>
          <div className="description__comments">
            <h3>Commentaire</h3>
            <form>
              <input type="text" name="name" placeholder="votre nom" />
              <textarea
                name="comment"
                placeholder="votre commentaire"
              ></textarea>
              <button>Envoyer</button>
            </form>
          </div>
        </div>
      </div>
      <div className="footer__copyright">
        <p>
          &copy;2021 lukafilm powered by{" "}
          <a href="https://jordanmosongo.netlify.app/">jordan mosongo</a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
