import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faSass, faBootstrap, faJs, faReact, faGithub, faFigma, faTrello, faWindows } from '@fortawesome/free-brands-svg-icons';
import { faDatabase} from '@fortawesome/free-solid-svg-icons';

function Tec({ titulo }) {
  let lenguajes;

  if (titulo === "Front-end") {
    lenguajes = (
      <ul className='tec__list'>
        <li>
          <FontAwesomeIcon icon={faHtml5} className='tec__icon' />
          <p className='tec__p'>HTML</p>
        </li>
        <li>
          <FontAwesomeIcon icon={faCss3Alt} className='tec__icon' />
          <p className='tec__p'>CSS</p>
        </li>
        <li>
          <FontAwesomeIcon icon={faSass} className='tec__icon' />
          <p className='tec__p'>Sass</p>
        </li>
        <li>
          <FontAwesomeIcon icon={faBootstrap} className='tec__icon' />
          <p className='tec__p'>BootStrap</p>
        </li>
        <li>
          <FontAwesomeIcon icon={faJs} className='tec__icon' />
          <p className='tec__p'>JavaScript</p>
        </li>
        <li>
          <FontAwesomeIcon icon={faReact} className='tec__icon' />
          <p className="tec__p">ReactJs</p>
        </li>
      </ul>
    );
  } else if (titulo === "Backend") {
    lenguajes = (
      <ul className='tec__list'>
        <li>
          <FontAwesomeIcon icon={faDatabase} className='tec__icon' />
          <p className="tec__p">SQL</p>
        </li>
      </ul>
    );
  } else if (titulo === "Tools") {
    lenguajes = (
      <ul className='tec__list'>
        <li>
          <FontAwesomeIcon icon={faGithub} className='tec__icon' />
          <p className="tec__p">Git</p>
        </li>
        <li>
          <FontAwesomeIcon icon={faFigma} className='tec__icon' />
          <p className="tec__p">Figma</p>
        </li>
        <li>
        <FontAwesomeIcon icon={faTrello} />
          <p className="tec__p">Trello</p>
        </li>
        <li>
        <FontAwesomeIcon icon={faWindows} />
          <p className="tec__p">Office</p>
        </li>
      </ul>
    );
  }

  return (
    <div className="tec">
      {lenguajes}
    </div>
  );
}

export default Tec;
