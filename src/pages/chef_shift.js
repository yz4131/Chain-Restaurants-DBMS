import React from 'react';
import '../styles/login.css';
import { Button } from 'semantic-ui-react';
import { useState, useEffect } from 'react';


function Chef_shift() {
    const [data, setData] = useState('');
    const [chef_id, setChef_id] = useState('');
    const [chef_psw, setPassword] = useState('');

    return (
        <div className='bigcontainer'>
        <h2 className='login'>Shift Checking</h2>
        <form >
            <div class="container">
                <label for="uname"><b>Username</b></label>
                <input type="text" placeholder="Enter Username" name="uname" value={chef_id} onChange={e => setChef_id(e.target.value)} required>
                </input>
                <label for="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" value={chef_psw} onChange={e => setPassword(e.target.value)} required>
                </input>
                <Button type = "button" onClick={async () => {
                        const chef = {chef_id, chef_psw};
                        var url = new URL('http://35.211.4.196:5000/chef_shift'),
                            params = {'uname':chef_id, 'psw':chef_psw} 
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
                <a href='/staff/chef_home'>
                <button type="button" class="cancelbtn">Cancel</button>
                </a>
            </div>
        </form>
        <h1> Your Shift: {data} </h1>
        </div>
    )
}

export default Chef_shift