import * as React from 'react';

const About = () => {
  return (
    <article className="about">
      <h3 className="about__title">Sobre mí</h3>
      <div className="about__container">
        <picture className="about__picture">
          <img src="/juan-picture.webp" alt="Juan Camilo Orjuela" />
        </picture>
        <div className="about__content">
          <p className="about__description">Imagine a world where technology becomes a transformative experience. As a web developer, I dive into this captivating world. My focus on front-end development and my ability to merge aesthetics and functionality elevate every project. But beyond my technical skills, my motivation lies in being part of a collaborative team where we overcome challenges and bring innovative ideas to life. I am always ready to learn and adapt to the latest trends, seeking personal growth in an environment that values creativity and positive impact on people's lives.</p>
        </div>
      </div>
    </article>
  );
};

export default About;
