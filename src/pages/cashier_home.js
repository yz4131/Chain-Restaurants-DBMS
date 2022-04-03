import React from 'react';
import '../styles/Staff_home.css';
import shift from "../assets/shift.png";
import register from "../assets/register.png";
import salary from "../assets/salary.png";

function Cashier_home() {
    return (
            <div className='staff'>
                <h1 className='welcomeTitle'>Customer First</h1>
                <div class="grid-container">
                    <div className='item1'> 
                        <div style={ {backgroundImage: `url(${shift})` }} ></div>
                        <h1>{'Shift'}</h1>

                        <div>
                            <a href = '/staff/cashier_home/cashier_shift'> 
                                <button  >Check</button>
                            </a>
                        </div>
                    </div>
                    <div className='item1'> 
                        <div style={ {backgroundImage: `url(${salary})` }} ></div>
                        <h1>{'Salary'}</h1>

                        <div>
                            <a href = '/staff/cashier_home/cashier_salary'> 
                                <button  >Check</button>
                            </a>
                        </div>
                    </div>
                    <div className='item1'> 
                        <div style={ {backgroundImage: `url(${register})` }} ></div>
                        <h1>{'Register'}</h1>

                        <div>
                            <a href = '/staff/cashier_home/register'> 
                                <button  >Start</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
}

export default Cashier_home