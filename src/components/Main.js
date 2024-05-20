import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave, faPrint, faStar, faShareAlt } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import Footer from './Footer';
import '../css/Main.css';

const Main = () => {
  const location = useLocation();
  const { typeFood, nameFood, imgSrc } = location.state || {};

  const [ingredients, setIngredients] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://192.168.1.6:3000/datamain', {
          params: {
            name_food: nameFood // Chỉnh lại tham số thành name_food cho khớp với server
          }
        });
        const data = response.data;
        setIngredients(data.nguyenlieu ? data.nguyenlieu.split('; ') : []); // Đảm bảo data.nguyenlieu được chuyển đổi thành mảng nếu cần
      } catch (error) {
        console.error('Error fetching recipe details:', error);
      }
    };

    if (nameFood) {
      fetchData();
    }
  }, [nameFood]);

  return (
    <div>
      <div className='Container-recipe'>
        <div className='item1'>
          <h1 className='_namefood'>{nameFood}</h1>
          <h3 className='_typefood'>{typeFood}</h3>
          <div className='Iconconact'>
            <div className='Save'>
              <label className='label-center'>
                <FontAwesomeIcon icon={faSave} /> Save
              </label>
            </div>
            <div className='Print'>
              <label className='label-center'>
                <FontAwesomeIcon icon={faPrint} style={{ color: 'orangered' }} /> Print
              </label>
            </div>
            <div className='Rate'>
              <label className='label-center'>
                <FontAwesomeIcon icon={faStar} style={{ color: 'orangered' }} /> Rate
              </label>
            </div>
            <div className='Share'>
              <label className='label-center'>
                <FontAwesomeIcon icon={faShareAlt} style={{ color: 'orangered' }} /> Share
              </label>
            </div>
          </div>
        </div>
        <div className='item2'>
          <img src={imgSrc} alt={nameFood} />
        </div>
        <div className='item3'>
          <h1>Nguyên liệu</h1>
          <ul>
            {ingredients && ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
        <div className='item4'>
          <h1>Hướng dẫn</h1>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
