import React from 'react';
import { MenuList } from "../helpers/MenuList";
import {Link} from "react-router-dom";
import MenuItem from '../components/MenuItem';
import '../styles/Menu.css'

function User() {
  return (
    <div className='user'>
      <h1 className='menuTitle'>Starting Order</h1>
      <div className='menuList'>{MenuList.map((menuItem, key) => {
        return <MenuItem key={key} image={menuItem.image} name={menuItem.name} price={menuItem.price} rating={menuItem.rating} />
      })}
      <Link to="/order">
        <button> Giving Tips? </button>
      </Link>
        
      </div>
    </div>
  )
}

export default User
