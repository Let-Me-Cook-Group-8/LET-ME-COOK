import React from 'react'
import { Link } from 'react-router-dom'
import '../css/CardFood.css'
const CardFood = ({ typeFood, nameFood, imgSrc }) => {
    return (
        <div className='cardFood'>
            <div className='card-body'>
                <img src={imgSrc}></img>
            </div>
            <div className='card-typeFood'>
                <h3>{typeFood}</h3>
            </div>
            <div className='card-nameFood'>
                <Link to="/Main"><h2>{nameFood}</h2></Link>
                
            </div>
        </div>
    )
}
export default CardFood;
