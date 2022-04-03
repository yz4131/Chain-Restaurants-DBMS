import React from 'react';
import '../styles/Staff_home.css';
import shift from "../assets/shift.png";
import chicken from "../assets/chicken.jpg";
import salary from "../assets/salary.png";

function Chef_home() {
    
    return (
            <div className='staff'>
                <h1 className='welcomeTitle'>Food Safety is Priority</h1>
                <div class="grid-container">
                    <div className='item1'> 
                        <div style={ {backgroundImage: `url(${shift})` }} ></div>
                        <h1>{'Shift'}</h1>

                        <div>
                            <a href = '/staff/chef_home/chef_shift'> 
                                <button  >Check</button>
                            </a>
                        </div>
                    </div>
                    <div className='item1'> 
                        <div style={ {backgroundImage: `url(${salary})` }} ></div>
                        <h1>{'Salary'}</h1>

                        <div>
                            <a href = '/staff/chef_home/chef_salary'> 
                                <button  >Check</button>
                            </a>
                        </div>
                    </div>
                    <div className='item1'> 
                        <div style={ {backgroundImage: `url(${chicken})` }} ></div>
                        <h1>{'Cook'}</h1>

                        <div>
                            <a href = '/staff/chef_home/chef_cook'> 
                                <button  >Start</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
}

export default Chef_home