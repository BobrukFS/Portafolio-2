import React, { useState } from 'react';
import Skills from '../Skills/Skills';
import Study from '../Study/Study';
import Exp from '../Exp/Exp';

function AboutMore() {
  const [activeTab, setActiveTab] = useState('Habilidades');
  const [additionalClass, setAdditionalClass] = useState('');

  const handleTabClick = (tab) => {
    if (tab === 'Estudios') {
      setAdditionalClass('Estudios');
    } else {
      setAdditionalClass('');
    }
    setActiveTab(tab);
  };

  return (
    <>
      <div className="about-more">
        <div className='about-more__main'>


        <div className='about-more__title'>
          <h3
            className={activeTab === 'Habilidades' ? 'active' : ''}
            onClick={() => handleTabClick('Habilidades')}
          >
            Habilidades
          </h3>
          <h3
            className={activeTab === 'Estudios' ? 'active' : ''}
            onClick={() => handleTabClick('Estudios')}
          >
            Estudios
          </h3>
          <h3
            className={activeTab === 'Experiencia' ? 'active' : ''}
            onClick={() => handleTabClick('Experiencia')}
          >
            Experiencia
          </h3>
        </div>

        <div className={`about-more__container ${additionalClass}`}>
          {activeTab === 'Habilidades' && <Skills />}
          {activeTab === 'Estudios' && <Study />}
          {activeTab === 'Experiencia' && <Exp />}
        </div>
        <svg className="about-more__cuadrado" width="70" height="70" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="gradiente" x1="0%" y1="100%" x2="100%" y2="0%">
      <stop offset="50%" stopColor="#ece8e3" />       {/* Color blanco en la mitad superior */}
      <stop offset="50%" stopColor="white" />     {/* Color #ece8e3 en la mitad inferior */}
    </linearGradient>
  </defs>
  <rect width="100" height="100" fill="url(#gradiente)" />
</svg>
</div>
      </div>
    </>
  );
}

export default AboutMore;
