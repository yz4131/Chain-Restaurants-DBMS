import React from 'react';
import '../styles/Staff.css';
import manager from "../assets/manager.png";
import chef from "../assets/chef.png";
import cashier from "../assets/cashier.png";
import waiter from "../assets/waiter.png";


function Staff() {
    return (
        <div className='staff'>
            <h1 className='welcomeTitle'>Choose your Identity</h1>
            <div class="grid-container">
                <div className='item1'> 
                    <div style={ {backgroundImage: `url(${manager})` }} ></div>
                    <h1>{'Manager'}</h1>
                    <br/>

                    <div>
                        <a href = '/staff/manager_home'> 
                        <button  >Log in</button>
                        </a>
                    </div>
                </div>
                <div className='item1'> 
                    <div style={ {backgroundImage: `url(${chef})` }} ></div>
                    <h1>{'Chef'}</h1>
                    <br/>

                    <div>
                        <a href = '/staff/chef_home'>
                        <button  >Log in</button>
                        </a>
                    </div>
                </div>
                <div className='item1'> 
                    <div style={ {backgroundImage: `url(${cashier})` }} ></div>
                    <h1>{'Cashier'}</h1>
                    <br/>

                    <div>
                        <a href = '/staff/cashier_home'>
                        <button  >Log in</button>
                        </a>
                    </div>
                </div>
                <div className='item1'> 
                    <div style={ {backgroundImage: `url(${waiter})` }} ></div>
                    <h1>{'Waiter/Waitress'}</h1>
                    <br/>
                    <div>
                        <a href = '/staff/waiter_home'>
                        <button  >Log in</button>
                        </a>
                    </div>
                    
                </div>
            </div>
        </div>

    )
    }
export default Staff