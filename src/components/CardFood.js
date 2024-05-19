import React from 'react';
import { Link } from 'react-router-dom';
import '../css/CardFood.css';

const CardFood = ({ typeFood, nameFood, imgSrc }) => {
  return (
    <div className='cardFood'>
      <div className='card-body'>
        <img src={imgSrc} alt={nameFood} />
      </div>
      <div className='card-typeFood'>
        <h3>{typeFood}</h3>
      </div>
      <div className='card-nameFood'>
        {/* Chuyển hướng đến trang Main với typeFood và nameFood */}
        <Link to={{
        pathname: "/main",
        state: {
            typeFood: typeFood,
            nameFood: nameFood,
            imgSrc: imgSrc
        }
        }}>
            <h2>{nameFood}</h2>
        </Link>

      </div>
    </div>
  );
}

export default CardFood;
