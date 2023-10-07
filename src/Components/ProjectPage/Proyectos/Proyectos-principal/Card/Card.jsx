import React from 'react';
import Complement from '../Complement/Complement';

const Card = () => {
 

  return (
    <>
      <div className="card" >
        <a href='https://www.figma.com/file/g42VlJAVEakzABAn2QOi7E/Untitled?type=design&node-id=0-1&mode=design&t=gEdoPDLiFiaJnImz-0' className='card__a'    target="_blank"><img
       src="https://camilapaladines.netlify.app/static/media/purple-calendar.82a23892.png"
          alt=""
          className="card__img"
        /> </a>

        <Complement className="card__complement"></Complement>
       
      </div>
    </>
  );
}

export default Card; 