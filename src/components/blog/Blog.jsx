import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import Blog1 from '../../assets/blog1.jpg';
import Blog2 from '../../assets/blog2.jpg';
import Blog3 from '../../assets/blog3.jpg';
import shapeOne from '../../assets/shape-1.png';
import './blog.css';

const Blog = () => {
  return (
    <section className="blog section" id="blog">
      <h2 className="section__title text-cs">Latest Blog</h2>
      <p className="section__subtitle">
        My <span>Articles And Advice</span>
      </p>

      <div className="blog__container container grid">
        <div className="blog__item card card-two">
          <span className="blog__date text-cs">Oct 14, 2022</span>
          <h3 className="blog__title">
            Python: The Programming Language of the Future (Insight Into
            Python's History)
          </h3>
          <p className="blog__description">
            Are you considering learning Python? Good choice! It’s a very
            popular programming language and has been for a while. In fact, it’s
            get started...
          </p>

          <a
            href="https://fiston.hashnode.dev/python-the-programming-language-of-the-future-insight-into-pythons-history"
            className="link"
          >
            Read more
            <FaArrowRight className="link__icon" />
          </a>

          <img src={Blog1} alt="" className="blog__img" />
        </div>

        <div className="blog__item card card-two">
          <span className="blog__date text-cs">Feb 4, 2023</span>
          <h3 className="blog__title">
            ReactJS: A Comprehensive Guide for Web Development
          </h3>
          <p className="blog__description">
            ReactJS is a popular JavaScript library for building user interfaces
            (UI) and single-page applications (SPAs). It was developed and
            maintained....
          </p>

          <a
            href="https://fiston.hashnode.dev/reactjs-a-comprehensive-guide-for-web-development"
            className="link"
          >
            Read more
            <FaArrowRight className="link__icon" />
          </a>

          <img src={Blog2} alt="" className="blog__img" />
        </div>

        <div className="blog__item card card-two">
          <span className="blog__date text-cs">Dec 29, 2022</span>
          <h3 className="blog__title">
            TypeScript: A Game-Changer for Building Large-Scale JavaScript
            Applications
          </h3>
          <p className="blog__description">
            As a JavaScript developer, you may have heard of TypeScript and
            wondered what it is and how it can benefit your workflow. In this
            blog post....
          </p>

          <a
            href="https://fiston.hashnode.dev/typescript-a-game-changer-for-building-large-scale-javascript-applications"
            className="link"
          >
            Read more
            <FaArrowRight className="link__icon" />
          </a>

          <img src={Blog3} alt="" className="blog__img" />
        </div>
      </div>

      <div className="section__deco deco__right">
        <img src={shapeOne} alt="" className="shape" />
      </div>

      <div className="section__bg-wrapper">
        <span className="bg__title">Blogs</span>
      </div>
    </section>
  );
};

export default Blog;
