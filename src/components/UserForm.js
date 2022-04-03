import React from 'react';
import '../styles/login.css';
import { Button } from 'semantic-ui-react';
import { useState } from 'react';

export const UserForm = () => {
    const [waiter_id, setWaiter_id] = useState('');
    const [email, setEmail] = useState('');
    const [tips, setTips] = useState('');
    const [show, setShow] = useState(false);


    return (
        <div className='bigcontainer'>
        <h2 className='login'>Any Tips?</h2>
        <form >
            <div class="container">
                <label for="uemail"><b>Email</b></label>
                <input type="email" placeholder="Enter Email" name="uemail" value={email} onChange={e => setEmail(e.target.value)} required>
                </input>
                <label for="wid"><b>Waiter_ID</b></label>
                <input type="number" placeholder="Enter Waiter ID" name="wid" value={waiter_id} onChange={e => setWaiter_id(e.target.value)} required>
                </input>
                <label for="tips"><b>Tips</b></label>
                <input type="number" placeholder="Enter Tips" name="tips" value={tips} onChange={e => setTips(e.target.value)} required>
                </input>
                <button type='button' onClick={async () => {
                        const user = {email, waiter_id, tips};
                        const response = await fetch('http://35.211.4.196:5000/order',{
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(user)
                        })
                        
                        if (response.ok) {
                            console.log(response);
                            setShow(true);

                        }

                    }
                    
                }>
                    Submit
                </button>
            </div>

            <div class="container" >
                <a href='/user'>
                <button type="button" class="cancelbtn">Maybe not</button>
                </a>
            </div>
            <div>
        {
            show && <div >You are all set</div>
        }
                
        </div>
        </form>
        </div>
    
    )
}