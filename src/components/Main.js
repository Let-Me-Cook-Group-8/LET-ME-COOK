import React from 'react';
import '../css/Main.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave, faPrint, faStar, faShareAlt } from '@fortawesome/free-solid-svg-icons';
import Footer from './Footer';
export default function Main() {
  return (
    <div>
        <div className='Container-recipe'>
      <div className='item1'>
        <h1 className='_namefood'>ABC</h1>
        <h3 className='_typefood'>XYZ</h3>
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
        <img src="https://www.allrecipes.com/thmb/H4C1ctGDXJ3RN8U3J4_X5YepBL4=/0x512/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/57354-Beef-Pho-DDMFS-3x4-0615-49503be6698c4771a88400caa1c45795.jpg"></img>
      </div>
      <div className='item3'>
        <h1>Ingredients</h1>
        <div className='listIngredient'></div>
      </div>
      <div className='item4'>
        <h1>Directions</h1>
        <div className='listStep'></div>
      </div>
    </div>
    <Footer/>
    </div>
    
  );
}
