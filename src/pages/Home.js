import React from 'react'
import RestaurantIcon from '@mui/icons-material/Restaurant';
import {Link} from "react-router-dom";
import mcback from "../assets/mcback.png"
import '../styles/Home.css';


function Home() {
  return(
       <div className='home' style={{ backgroundImage: `url(${mcback})` }}  >
           <div 
            className='headerContainer'>
               <h1>
                   Welcome to McDonald
               </h1>
               <br/>
               <br/>
               <h2>
                    We’re Passionate About Our Food
               </h2>
               <h4>
                    From adding more balanced options to our Happy Meal®, to serving up fresh beef Quarter Pounder® burgers that are cooked when you order, we’re always finding ways to show our commitment to our customers and our food. 
               </h4>
               <br/>
               <br/>
               <p>View our dishes <RestaurantIcon /></p>
               <Link to="/user">
                   <button> MENU </button>
               </Link>

           </div>

  </div>
  );
  
}

export default Home;
