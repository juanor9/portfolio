import * as React from "react";
import Layout from "../components/layout";

const AboutPage = () => {
  return (
    <Layout>
      <section>
        <h2>About me</h2>
        <p>
          Hey there! Let me take you on a journey through my path into the world
          of web development.
        </p>
        <h3>🌟 My Story:</h3>
        <p>
          It all started with creating Hotmail community pages for my favorite
          anime series during school. I quickly grasped HTML and CSS, surpassing
          my teacher's knowledge and teaching him some advanced CSS tricks.
        </p>

        <p>
          In college, my passion for web development grew. I delved deeper into
          HTML and CSS, constantly challenging myself. During my BA research
          thesis, I realized the need for better data analysis and started
          learning Python.
        </p>

        <p>
          After college, I worked as a copywriter for Mc.Graw-Hill Education
          online platforms. My CSS skills allowed me to create polished content.
          This experience inspired me to pursue web development full-time,
          focusing on the MERN stack.
        </p>

        <h3>💻 As Developer:</h3>
        <p>
          As a versatile developer, I'm proficient in JavaScript, TypeScript,
          Python, HTML, CSS, SASS, React.js, Node.js, Express.js, Redux Toolkit,
          auth0, Gatsby, Django, MySQL, MongoDB, Mongoose, GraphQL, SQLite,
          WordPress, Git, GitHub, Jira, and Scrum.
        </p>

        <p>
          I've developed some projects, including a hotel booking website
          and an inventory solution for publishing houses. I love both frontend
          and backend development, specializing in creating visually appealing
          user interfaces and organizing data with API REST.
        </p>

        <h3>🎨 As A Person:</h3>
        <p>
          Beyond coding, I have a diverse background in copywriting, publishing,
          and teaching Japanese. I enjoy illustration, graphic design, anime,
          manga, video games, calligraphy, and astrology. If you're interested
          in any of these topics you can contact me too. Communication,
          responsibility, creativity, and aesthetics are my strengths.
        </p>

        <h3> 🤝As A Colleague:</h3>
        <p>
          I'm reliable, accountable, and a team player. I've led teams for
          schoolbook projects, collaborating with writers, readers, and
          designers. Open communication and respect for diverse perspectives are
          vital to me.
        </p>
        <p>
          Feel free to reach out for more info. Let's bring web experiences to
          life together!
        </p>
      </section>
    </Layout>
  );
};

export default AboutPage;

export const Head = () => <title>About</title>;
