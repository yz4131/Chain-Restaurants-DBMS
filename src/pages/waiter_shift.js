import React from 'react';
import '../styles/login.css';
import { Button } from 'semantic-ui-react';
import { useState, useEffect } from 'react';


function Waiter_shift() {
    const [data, setData] = useState('');
    const [waiter_id, setWaiter_id] = useState('');
    const [waiter_psw, setPassword] = useState('');

    return (
        <div className='bigcontainer'>
        <h2 className='login'>Shift Checking</h2>
        <form >
            <div class="container">
                <label for="uname"><b>Username</b></label>
                <input type="text" placeholder="Enter Username" name="uname" value={waiter_id} onChange={e => setWaiter_id(e.target.value)} required>
                </input>
                <label for="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" value={waiter_psw} onChange={e => setPassword(e.target.value)} required>
                </input>
                <Button type = "button" onClick={async () => {
                        const waiter = {waiter_id, waiter_psw};
                        var url = new URL('http://35.211.4.196:5000/waiter_shift'),
                            params = {'uname':waiter_id, 'psw':waiter_psw} 
                            Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
                        const response = fetch(url,{
                            method: 'GET', 
                            headers: {
                                'Content-Type': 'application/json'
                            }
                        })
                        
                        .then(data => data.json())
                        .then(resp => setData(resp))
                        
                        console.log(data)
                    }
                    
                }>
                    Check
                </Button>
            </div>

            <div class="container" >
                <a href='/staff/waiter_home'>
                <button type="button" class="cancelbtn">Cancel</button>
                </a>
            </div>
        </form>
        <h1> Your Shift: {data} </h1>
        </div>
    )
}

export default Waiter_shift