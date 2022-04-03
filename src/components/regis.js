import React, { useState } from 'react';
import { Button, Form, Input} from 'semantic-ui-react';
import {Link} from "react-router-dom";



export const Regis = () => {
    const [user_name, setUser_name] = useState('');
    const [email, setEmail] = useState('');
    const [beef, setBeef] = useState('');
    const [Chicken, setChicken] = useState('');
    const [fish, setFish] = useState('');
    const [coke, setCoke] = useState('');
    const [fries, setFries] = useState('');
    const [icecream, setIcecream] = useState('');
    const [chickenwing, setChickenwing] = useState('');
    const [show, setShow] = useState(false);


    return (
        <Form className='UserInput'>
            <Form.Field>
                <Input placeholder='Your name' value={user_name} onChange={e => setUser_name(e.target.value)} />                
            </Form.Field>
            <br></br>
            <Form.Field>
                <Input placeholder='Your email' type='email' value={email} onChange={e => setEmail(e.target.value)} />
            </Form.Field>
            <br/>
            <Form.Field>                
                <Input label='Beef Burger' placeholder='How many do you want' type='number' value={beef} onChange={e => setBeef(e.target.value)} />                
            </Form.Field>
            <br/>
            <Form.Field>                
                <Input label='Chicken Burger' placeholder='How many do you want' type='number' value={Chicken} onChange={e => setChicken(e.target.value)} />                
            </Form.Field>
            <br/>
            <Form.Field>                
                <Input label='Fish Burger' placeholder='How many do you want' type='number' value={fish} onChange={e => setFish(e.target.value)} />                
            </Form.Field>
            <br/>
            <Form.Field>                
                <Input label='Coke' placeholder='How many do you want' type='number' value={coke} onChange={e => setCoke(e.target.value)} />                
            </Form.Field>
            <br/>
            <Form.Field>                
                <Input label='Fries' placeholder='How many do you want' type='number' value={fries} onChange={e => setFries(e.target.value)} />                
            </Form.Field>
            <br/>
            <Form.Field>                
                <Input label='Icecream' placeholder='How many do you want' type='number' value={icecream} onChange={e => setIcecream(e.target.value)} />                
            </Form.Field>
            <br/>
            <Form.Field>                
                <Input label='ChickenWings' placeholder='How many do you want' type='number' value={chickenwing} onChange={e => setChickenwing(e.target.value)} />                
            </Form.Field>
            <br/>
            <Form.Field>
                <Button onClick={async () => {
                    const user = {user_name, email, beef, Chicken, fish, coke, fries, icecream, chickenwing};
                    const response = await fetch('http://35.211.4.196:5000/orderfood',{
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(user)
                    })

                    if (response.ok) {
                        console.log(response);
                        setShow(!show)
                    }
                }
                }>
                    submit
                </Button>
            </Form.Field>
            <br/>
            <div className='check'>               
                
                {
                    show && (<Link to="/staff/cashier_home/register/check"><button> Ready for check? </button></Link>)
                }
                
            </div>
        </Form>
    )
}