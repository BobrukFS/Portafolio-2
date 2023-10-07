import React, { useState } from 'react';
import Tec from './tec/tec';

function Skills() {
  const tecTitles = ['Front-end', 'Backend', 'Tools'];
  const [activeTitle, setActiveTitle] = useState(tecTitles[0]);

  const changeSection = (newTitle) => {
    setActiveTitle(newTitle);
  };

  return (
    <>
      <div className="skills">
        <div className="skills__titles">
          {tecTitles.map((title, index) => (
            <h4
              key={index}
              className={`skills__title ${activeTitle === title ? 'active' : ''}`}
              onClick={() => changeSection(title)}
            >
              {title}
            </h4>
          ))}
        </div>

        <div className="skills__tec">
          <Tec titulo={activeTitle}></Tec>
        </div>
      </div>
    </>
  );
}

export default Skills;
