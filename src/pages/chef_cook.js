import React from 'react';
import '../styles/login.css';
import { Button } from 'semantic-ui-react';
import { useState } from 'react';


function Chef_cook() {
    const [chef_id, setChef_id] = useState('');
    const [food_id, setFood_id] = useState('');
    const [chef_psw, setPassword] = useState('');
    const [date, setDate] = useState('');
    const [show, setShow] = useState(false);

    return (
        <div className='bigcontainer'>
        <h2 className='login'>Cooking</h2>
        <form >
            <div class="container">
                <label for="uid"><b>ID</b></label>
                <div>
                <input type="text" placeholder="Enter ID" name="uid" value={chef_id} onChange={e => setChef_id(e.target.value)} required>
                </input>
                </div>
                <label for="psw"><b>Password</b></label>
                <div>
                <input type="password" placeholder="Enter Password" name="psw" value={chef_psw} onChange={e => setPassword(e.target.value)} required>
                </input>
                </div>
                <label for="fid"><b>Food ID</b></label>
                <div>
                <input type="text" placeholder="Enter Food ID" name="fid" value={food_id} onChange={e => setFood_id(e.target.value)} required>
                </input>
                </div>
                <label for="date"><b>Date</b></label>

                <input type="text" placeholder="Enter Date" name="date" value={date} onChange={e => setDate(e.target.value)} required>
                </input>

                <button type='button' onClick={async () => {
                        const chef = {chef_id, chef_psw, food_id, date};
                        const response = await fetch('http://35.211.4.196:5000/chef_cook',{
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(chef)
                        })
                        
                        if (response.ok) {
                            console.log(response);
                            setShow(true);

                        }

                    }
                    
                }>
                    Fill in
                </button>

                

            </div>

            <div class="container" >
                <a href='/staff/chef_home'>
                <button type="button" class="cancelbtn">Cancel</button>
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

export default Chef_cook