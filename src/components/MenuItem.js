import React from 'react';
import StarRateIcon from '@mui/icons-material/StarRate';

function MenuItem({ image, name, price, rating}) {
  return (
    <div className='menuItem'> 
        <div style={{ backgroundImage: `url(${image})` }} ></div>
        <h1>{name}</h1>
        <p> $ PRICE :  {price} </p>
        <p> RATING: {rating} <StarRateIcon style={{position: 'relative', top: '5px'}}/></p>       


      
    </div>
  )
}

export default MenuItem
