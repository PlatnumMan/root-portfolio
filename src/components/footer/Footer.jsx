import React from 'react';
import { FaTwitter, FaDribbble, FaGithub } from 'react-icons/fa';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container grid">
        <div className="footer__socials">
          <a href="" className="footer__social-link">
            <FaTwitter />
          </a>

          <a href="" className="footer__social-link">
            <FaDribbble />
          </a>

          <a href="" className="footer__social-link">
            <FaGithub />
          </a>
        </div>

        <p className="footer__copyright text-cs">
          &copy; 2023 <span>Fiston</span>. All Rights Reserved
        </p>

        <p className="footer__copyright text-cs">
          Developed by <span>PlatinumMan#Root</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
