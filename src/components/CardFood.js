import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/CardFood.css';

const CardFood = ({ typeFood, nameFood, imgSrc }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate('/main', {
      state: {
        typeFood: typeFood,
        nameFood: nameFood,
        imgSrc: imgSrc
      }
    });
  };

  return (
    <div className='cardFood' onClick={handleCardClick}>
      <div className='card-body'>
        <img src={imgSrc} alt={nameFood} />
      </div>
      <div className='card-typeFood'>
        <h3>{typeFood}</h3>
      </div>
      <div className='card-nameFood'>
        <h2>{nameFood}</h2>
      </div>
    </div>
  );
}

export default CardFood;
