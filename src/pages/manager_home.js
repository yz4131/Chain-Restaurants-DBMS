import React from 'react';
import '../styles/Staff_home.css';
import info from "../assets/info.png";
import adjustment from "../assets/adjustment.png";
import hire from "../assets/hire.png";

function Manager_home() {
    return (
            <div className='staff'>
                <h1 className='welcomeTitle'>Start Managing</h1>
                <div class="grid-container">
                    <div className='item1'> 
                        <div style={ {backgroundImage: `url(${info})` }} ></div>
                        <h1>{'Staff Info'}</h1>

                        <div>
                            <a href = '/staff/manager_home/staff_info'> 
                                <button  >Check</button>
                            </a>
                        </div>
                    </div>
                    <div className='item1'> 
                        <div style={ {backgroundImage: `url(${adjustment})` }} ></div>
                        <h1>{'Adjustment'}</h1>

                        <div>
                            <a href = '/staff/manager_home/adjustment'> 
                                <button  >Go</button>
                            </a>
                        </div>
                    </div>
                    <div className='item1'> 
                        <div style={ {backgroundImage: `url(${hire})` }} ></div>
                        <h1>{'Hire'}</h1>

                        <div>
                            <a href = '/staff/manager_home/hire'> 
                                <button  >Go</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
}

export default Manager_home