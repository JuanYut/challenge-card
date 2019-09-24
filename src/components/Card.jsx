import React from 'react';
import './card.css';

const Card = props => {
  const { images, title, description } = props;

  return (
    <div className='container-card'>
      <img className='image-card' src='https://bit.ly/2mxmVaJ' alt='' />
      <div className='info-card'>
        <h2 className='title-card'>{title}</h2>
        <p className='description-card'>{description}</p>
      </div>
    </div>
  );
};

export default Card;
