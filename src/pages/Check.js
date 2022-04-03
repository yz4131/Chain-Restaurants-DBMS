import React, {useState, useEffect } from 'react';
import { Form } from 'semantic-ui-react';
import '../styles/Register.css';
import { Button,  Input} from 'semantic-ui-react';



function Check() {
    const [data, setData] = useState([]);
    const [date, setDate] = useState('');
    const [cashier_id, setCashier_Id] = useState('');
    const [payment, setPayment] = useState('');
    const [res_id, setRes_id] = useState('');
 
    
  
    useEffect(() => {
      fetch('http://35.211.4.196:5000/check', {
        'method':'GET',      
        header:{
          'Content-Type':'application/json'
        }
      })
      .then(data => data.json())
      .then(resp => setData(resp))
      .catch(error => console.log(error))
    },[])
    
    return (
    <div className='check'>
      <h1 className='Title'>Total: {data.price}</h1>
        <Form className='StaffInput'>
        <br/>          
              <select placeholder='Select Restaurant ID' style={{width: 100}} value={res_id} onChange={e => setRes_id(e.target.value)}> 
              <option value="RestaurantID">RestaurantID</option>            
              <option value="Fnmdad7dvjqwrEmQby12CQ">Fnmdad7dvjqwrEmQby12CQ</option>       
              <option value="aF05dAZpGr8eBiI2IkAFaA">aF05dAZpGr8eBiI2IkAFaA</option>   
              <option value="VpISwPV93Zw1c4vkoRca7w">VpISwPV93Zw1c4vkoRca7w</option>   
              <option value="aUGq0Cy4yNkBlwzDP2OTbQ">aUGq0Cy4yNkBlwzDP2OTbQ</option>   
              <option value="yABI6gRdp0I_AScopX69Bg">yABI6gRdp0I_AScopX69Bg</option>
              <option value="f0VJirNbBXsS8Ihvv-Rs1g">f0VJirNbBXsS8Ihvv-Rs1g</option>
              <option value="VqoXgaS-vTfCu-yrlYol1g">VqoXgaS-vTfCu-yrlYol1g</option>
              <option value="VpISwPV93Zw1c4vkoRca7w">VpISwPV93Zw1c4vkoRca7w</option>
              <option value="mgEozttiDRnWT6AMilTPBw">mgEozttiDRnWT6AMilTPBw</option>
              </select>           
            
            <br/>
            <Form.Field>
              <Input placeholder='Date' value={date} onChange={e => setDate(e.target.value)} />               
            </Form.Field>
            <br/>
            <Form.Field>
              <Input placeholder='Cashier_id' value={cashier_id} onChange={e => setCashier_Id(e.target.value)} />               
            </Form.Field>
            <br/>
            <Form.Field>
              <Input placeholder='payment' value={payment} onChange={e => setPayment(e.target.value)} />               
            </Form.Field>
            <br/>
            <Form.Field>
            <Button onClick={async () => {
                    const user = {res_id, date, cashier_id, payment};
                    const response = await fetch('http://35.211.4.196:5000/check',{
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(user)
                    })
                }
                }>
                    submit
              </Button>        
            </Form.Field>
            <div >
                <a href='/staff/cashier_home/register'>
                <button type="button" class="cancelbtn">NEXT</button>
                </a>
            </div>
        </Form>      
    </div>
  )
    }
    export default Check