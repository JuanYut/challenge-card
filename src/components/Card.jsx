import React from 'react';
import './card.css';

const Card = props => {
  const { images, title, description } = props;

  return (
    <div className='container-card'>
      <div className='slider'>
        <ul>
          {images.map((img, index) => {
            return (
              <li key={index}>
                <img className='image-card' src={img} alt='' />
              </li>
            );
          })}
        </ul>
      </div>
      <div className='info-card'>
        <h2 className='title-card'>{title}</h2>
        <p className='description-card'>{description}</p>
      </div>
    </div>
  );
};

export default Card;
