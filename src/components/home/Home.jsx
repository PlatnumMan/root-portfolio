import React from 'react';
import profileImg from '../../assets/profile-img.png';
import shapeOne from '../../assets/shape-1.png';
import shapeTwo from '../../assets/shape-2.png';
import CV from '../../assets/CV Fiston Dev.pdf';

import { FaTwitter, FaDribbble, FaGithub } from 'react-icons/fa';
import './home.css';

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home__wrapper">
        <div className="home__container container">
          <p className="home__subtitle text-cs">
            Hello, <span>You can Call Me</span>
          </p>

          <h1 className="home__title text-cs">
            <span>Root</span>
          </h1>

          <p className="home__job">
            <span className="text-cs"></span> <b>Software Engineer </b>
          </p>

          <div className="home__img-wrapper">
            <div className="home__banner">
              <img src={profileImg} alt="" className="home__profile" />
            </div>

            <p className="home__data home__data-one">
              <span className="text-lg">
                3 <b>+</b>
              </span>

              <span className="text-sm text-cs">
                Years of <span>Experience</span>
              </span>
            </p>

            <p className="home__data home__data-two">
              <span className="text-lg">56</span>

              <span className="text-sm text-cs">
                Complete <span>Projects</span>
              </span>
            </p>

            <img src={shapeOne} alt="" className="shape shape__1" />
            <img src={shapeTwo} alt="" className="shape shape__2" />
            <img src={shapeTwo} alt="" className="shape shape__3" />
          </div>

          <p className="home__text">
            Skilled developer with a strong foundation in computer science. With
            expertise in multiple programming languages and frameworks, have a
            proven track record of designing and implementing effective software
            solutions. ability to collaborate with cross-functional teams and
            communicate technical concepts to non-technical stakeholders sets
            them apart. he have a keen interest in emerging technologies and
            continuously seek out opportunities to expand his skill set. Outside
            of work, he enjoy pursuing creative hobbies and staying active.
          </p>

          <div className="home__socials">
            <a href="" className="home__social-link">
              <FaTwitter />
            </a>

            <a href="" className="home__social-link">
              <FaDribbble />
            </a>

            <a href="https://github.com/PlatnumMan" className="home__social-link">
              <FaGithub />
            </a>
          </div>

          <div className="home__btns">
            <a download="" href={CV} className="btn text-cs">
              Download CV
            </a>

            <a href="#skills" className="hero__link text-cs">
              My Skills
            </a>
          </div>
        </div>

        <div className="section__deco deco__left">
          <img src={shapeOne} alt="" className="shape" />
        </div>
      </div>

      <div className="section__bg-wrapper">
        <span className="bg__title">Software Engineer</span>
      </div>
    </section>
  );
};

export default Home;
