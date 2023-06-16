import * as React from "react";
import Layout from "../../components/es/layout";

const AboutPage = () => {
  return (
    <Layout>
      <section>
        <h2>Sobre mí</h2>
        <p>
          Hola. Déjame llevarte en un viaje a través de mi camino en el mundo
          del desarrollo web.
        </p>
        <h3>🌟 Mi historia:</h3>
        <p>
          Todo empezó creando páginas para las comunidades de Hotmail para mis
          series de anime favoritas durante el colegio. Rápidamente aprendí HTML
          y CSS, superando los conocimientos de mi profesor y enseñándole
          algunos trucos avanzados de CSS.
        </p>

        <p>
          En la universidad, mi pasión por el desarrollo web creció. Profundicé
          en HTML y CSS, desafiándome constantemente. Durante mi tesis de
          investigación de licenciatura, me di cuenta de la necesidad de mejorar
          mi análisis de datos y empecé a aprender Python.
        </p>

        <p>
          Después de la universidad, trabajé como redactor para las plataformas
          en línea de Mc.Graw-Hill Education. Mis conocimientos de CSS me
          permitieron crear contenidos visualmente muy pulidos. Esta experiencia
          me inspiró para dedicarme al desarrollo web a tiempo completo,
          centrándome en MERN stack.
        </p>

        <h3>💻 Como desarrollador:</h3>
        <p>
          Como desarrollador versátil, domino JavaScript, TypeScript, Python,
          HTML, CSS, SASS, React.js, Node.js, Express.js, Redux Toolkit, auth0,
          Gatsby, Django, MySQL, MongoDB, Mongoose, GraphQL, SQLite, WordPress,
          Git, GitHub, Jira y Scrum.
        </p>

        <p>
          He desarrollado algunos proyectos, incluyendo un sitio web de reservas
          de hoteles y una solución de inventario para editoriales. Me encanta
          el desarrollo tanto frontend como backend, especializándome en la
          creación de interfaces de usuario visualmente atractivas y en la
          organización de datos con API REST.
        </p>

        <h3>🎨 Como persona:</h3>
        <p>
          Además del desarrollon, tengo experiencia en redacción, corrección de
          textos, edición y enseñanza del japonés. Me gusta la ilustración, el
          diseño gráfico, el anime, el manga, los videojuegos, la caligrafía y
          la astrología. Si te interesa alguno de estos temas también puedes
          ponerte en contacto conmigo. La comunicación, la responsabilidad, la
          creatividad y la estética son mis puntos fuertes.
        </p>

        <h3>🤝 Como compañero de trabajo:</h3>
        <p>
          Soy confiable, responsable y trabajo bien en equipo. He dirigido
          equipos para proyectos de libros escolares, colaborando con
          escritores, lectores y diseñadores. La comunicación abierta y el
          respeto por las diversas perspectivas son vitales para mí.
        </p>
        <p>
          No dudes en ponerte en contacto conmigo para obtener más información.
          ¡Juntos daremos vida a experiencias web increíbles!
        </p>
      </section>
    </Layout>
  );
};

export default AboutPage;

export const Head = () => <title>Sobre mí</title>;
