import * as React from "react";
import Layout from "../components/layout";

const AboutPage = () => {
  return (
    <Layout>
      <section>
        <h2>About me</h2>
        <p>Hace unos años, mientras aún estaba en el colegio, me adentré en el fascinante mundo del desarrollo web. Mientras mis compañeros de clase aprendían los fundamentos de HTML y CSS, yo ya estaba explorando selectores más complejos y creando diseños únicos. Recuerdo cómo mi maestro, sin saberlo, a menudo me pedía que le enseñara cómo lograr ciertos efectos. Ese fue el momento en el que supe que el desarrollo web sería mi pasión.

Lo que me motiva cada día es la posibilidad de crear experiencias altamente funcionales que faciliten el acceso a servicios de calidad. Mi verdadero amor está en el diseño. No solo quiero que las cosas funcionen bien, sino que deseo que el acto de usarlas sea una experiencia estética y agradable.

Mis valores fundamentales como desarrollador web se centran en la funcionalidad, la belleza, la rapidez y la capacidad de responder a necesidades concretas. Busco combinar estos elementos en cada proyecto que emprendo.

Uno de mis logros más significativos hasta ahora ha sido el desarrollo de un MVP de gestión de inventarios para editoriales independientes. Este proyecto en curso combina mis dos pasiones: el desarrollo web y la producción editorial. Me llena de satisfacción poder contribuir a mejorar los procesos de estas editoriales y ayudarlas a alcanzar sus objetivos.

En resumen, soy una persona motivada y trabajadora que se deleita en aprender constantemente y mantenerse actualizada en las últimas tecnologías. Mi mayor satisfacción radica en ayudar a las personas a alcanzar sus objetivos, sin importar cuán grandes o pequeños sean.</p>
        </section>
    </Layout>
  );
};

export default AboutPage;

export const Head = () => <title>About</title>;
