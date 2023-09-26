import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer__container container">
        {/* <h1 className="footer__title">Jv</h1> */}
        {/* <h3 className="footer__subtitle">Gamer Tag</h3> */}
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="footer__link">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="footer__link">
              Projects
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://twitter.com/jaivignesh_jv"
            className="footer__social-link"
            target={"_blank"}
          >
            <i class="uil uil-twitter-alt"></i>
          </a>

          <a
            href="https://www.instagram.com/Jaivignesh_Jv_/"
            className="footer__social-link"
            target={"_blank"}
          >
            <i class="uil uil-instagram"></i>
          </a>

          <a
            href="https://t.me/SekC_Jv"
            className="footer__social-link"
            target={"_blank"}
          >
            <i class="uil uil-telegram-alt"></i>
          </a>

          <a
            href="https://wa.me/+919499924412"
            className="footer__social-link"
            target={"_blank"}
          >
            <i class="uil uil-whatsapp"></i>
          </a>
          <a
            href="mailto:jaivignesh_jv@outlook.com"
            className="footer__social-link"
            target={"_blank"}
          >
            <i class="uil uil-envelope-alt"></i>
          </a>
        </div>

        <span className="footer__copy"> made with 💖 by Jv </span>
      </div>
    </footer>
  );
};

export default Footer;
