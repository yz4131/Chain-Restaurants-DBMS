import React from 'react';
import '../styles/Staff_home.css';
import shift from "../assets/shift.png";
import tips from "../assets/tips.png";
import salary from "../assets/salary.png";

function Waiter_home() {
    return (
            <div className='staff'>
                <h1 className='welcomeTitle'>Serve with a Smile</h1>
                <div class="grid-container">
                    <div className='item1'> 
                        <div style={ {backgroundImage: `url(${shift})` }} ></div>
                        <h1>{'Shift'}</h1>


                        <div>
                            <a href = '/staff/waiter_home/waiter_shift'> 
                                <button  >Check</button>
                            </a>
                        </div>
                    </div>
                    <div className='item1'> 
                        <div style={ {backgroundImage: `url(${salary})` }} ></div>
                        <h1>{'Salary'}</h1>

                        <div>
                            <a href = '/staff/waiter_home/waiter_salary'> 
                                <button  >Check</button>
                            </a>
                        </div>
                    </div>
                    <div className='item1'> 
                        <div style={ {backgroundImage: `url(${tips})` }} ></div>
                        <h1>{'Tips'}</h1>

                        <div>
                            <a href = '/staff/waiter_home/waiter_tips'> 
                                <button  >Check</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
}

export default Waiter_home