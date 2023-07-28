import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDesktop, faDatabase, faTools } from '@fortawesome/free-solid-svg-icons';




function Tec({titulo}) {
let lenguajes;
let iconContainer;
if(titulo === "Front-end"){
  lenguajes = [
    <img className="tec__img" src="https://img.shields.io/badge/-CSS-%23333?style=for-the-badge&logo=css3&logoColor=white" target="_blank"/ >,
    <img className="tec__img" src="https://img.shields.io/badge/-HTML-%23333?style=for-the-badge&logo=html5&logoColor=white" target="_blank"/ >,
    <img className="tec__img" src="https://img.shields.io/badge/-JavaScript-%23333?style=for-the-badge&logo=javascript&logoColor=white" target="_blank"/ >,
    <img className="tec__img" src="https://img.shields.io/badge/-SASS-%23333?style=for-the-badge&logo=sass&logoColor=white" target="_blank"/ >,
    <img className="tec__img" src="https://img.shields.io/badge/-Bootstrap-%23333?style=for-the-badge&logo=bootstrap&logoColor=white" target="_blank"/ >,
    <img className="tec__img" src="https://img.shields.io/badge/-React-%23333?style=for-the-badge&logo=react&logoColor=white" target="_blank"/ >,
  ];
  iconContainer =  <FontAwesomeIcon className="tec__icon" icon={faDesktop} />
} else if (titulo === "Backend"){
  lenguajes = [
    <img className="tec__img" src="https://img.shields.io/badge/-SQL-%23333?style=for-the-badge&logo=mysql&logoColor=white" target="_blank"/ >,
  ];
  iconContainer =  <FontAwesomeIcon className="tec__icon tec__icon--backend" icon={faDatabase} />
} else if (titulo === "Tools"){
  lenguajes = [
    <img className="tec__img" src="https://img.shields.io/badge/-Git-%23333?style=for-the-badge&logo=github&logoColor=white" target="_blank"/ >,
    <img className="tec__img" src="https://img.shields.io/badge/-Trello-%23333?style=for-the-badge&logo=trello&logoColor=white" target="_blank"/ >,
    <img className="tec__img" src="https://img.shields.io/badge/-Figma-%23333?style=for-the-badge&logo=figma&logoColor=white" target="_blank"/ >,
  ];
  iconContainer =  <FontAwesomeIcon className="tec__icon tec__icon--tools" icon={faTools} />
}

  return (
    
    <>
        <div className="tec">
            <div>
            {iconContainer}
            <h4 className={`tec__title tec__title--${titulo}`}>{titulo}</h4>
            </div>
            <div className='tec__container'>
                {lenguajes}
             </div>
          
        </div>
     </> 
  )
}

export default Tec