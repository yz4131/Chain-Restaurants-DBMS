import React from 'react'
import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css';
import ReorderIcon from '@mui/icons-material/Reorder';

function Navbar() {
  return (
    <div className="navbar">
        <div className='leftSide'>
            <img src={Logo} />            
        </div>

        <div className='rightSide'>
            <Link to='/'> Home </Link>
            <Link to='/user'> User </Link>
            <Link to='/staff'> Staff </Link>
            <button>
                <ReorderIcon />
            </button>
            
        </div>

      
    </div>
  )
}

export default Navbar
