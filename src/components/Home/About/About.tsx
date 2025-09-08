import * as React from 'react';
import './About.scss';

const About = () => {
  return (
    <article className="about">
      <h3 className="about__title">About</h3>
      <div className="about__container">
        <picture className="about__picture">
          <img src="/juan-picture.webp" alt="Juan Camilo Orjuela" />
        </picture>
        <div className="about__content">
          <p className="about__description">I'm Juan Camilo Orjuela, a front‑end developer who builds accessible, user‑centric web experiences. I blend creativity with technical expertise and thrive in collaborative, diverse environments.</p>
        </div>
      </div>
    </article>
  );
};

export default About;
