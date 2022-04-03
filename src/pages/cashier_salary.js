import React from 'react';
import '../styles/login.css';
import { Button } from 'semantic-ui-react';
import { useState, useEffect } from 'react';


function Cashier_salary() {
    const [data, setData] = useState('');
    const [cashier_id, setChef_id] = useState('');
    const [cashier_psw, setPassword] = useState('');

    return (
        <div className='bigcontainer'>
        <h2 className='login'>Salary Checking</h2>
        <form >
            <div class="container">
                <label for="uname"><b>Username</b></label>
                <input type="text" placeholder="Enter Username" name="uname" value={cashier_id} onChange={e => setChef_id(e.target.value)} required>
                </input>
                <label for="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" value={cashier_psw} onChange={e => setPassword(e.target.value)} required>
                </input>
                <Button type = "button" onClick={async () => {
                        const cashier = {cashier_id, cashier_psw};
                        var url = new URL('http://35.211.4.196:5000/cashier_salary'),
                            params = {'uname':cashier_id, 'psw':cashier_psw} 
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
                <a href='/staff/cashier_home'>
                <button type="button" class="cancelbtn">Cancel</button>
                </a>
            </div>
        </form>
        <h1> Your Salary: {data} </h1>
        </div>
    )
}

export default Cashier_salary