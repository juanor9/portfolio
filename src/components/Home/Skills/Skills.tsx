import * as React from "react";
import Tag from "../../ui/Tag/Tag";
import "./Skills.scss";

const Skills = () => {
  const skillsList = {
    languages: [
      "JavaScript",
      "TypeScript"
    ],
    frontend: [
      "React",
      "Lit",
      "Vue 3",
      "TypeScript",
      "SASS",
      "HTML5 + CSS3",
    ],
    APIs: [
      "REST APIs",
      "GraphQL"
    ],
    Accessibility: [
      "WCAG 2.2",
      "EN 301 549",
      "Refactor for a11y"
    ],
    testing: [
      "Jest",
      "Mocha",
      "Chai"
    ],
    CMS: [
      "Optimizely"
    ],
    Tools: [
      "Git",
      "ESLint",
      "Prettier",
      "Webpack",
      "Rollup"
    ],
    "Soft Skills": [
      "Autonomy",
      "Collaboration",
      "Effective Organization",
      "Focus on usage",
      "Focus on accessibility",
      
    ]
  };

  return (
    <article className="skills">
      <h3 className="skills__title">Skills</h3>
      <div className="skills__container">
      {Object.entries(skillsList).map(([category, skills]) => (
        <div key={category} className="skills__group">
          <h4 className="skills__group-title">{category}</h4>
          <ul className="skills__list">
            {skills.map((skill) => (
              <li key={skill}>
                <Tag text={skill} _isLink={false} />
              </li>
            ))}
          </ul>
        </div>
      ))}
      </div>
    </article>
  );
};

export default Skills;
