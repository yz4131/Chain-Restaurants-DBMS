import React, {Component} from 'react';
import {useState, useEffect} from 'react';
import '../styles/Info.css';
import { Container } from 'semantic-ui-react';



function Info() {
  const [data, setData] = useState([]);
  const [staff_cat, setCat] = useState('');
  const [staff_id, setStaffid] = useState('');  
  const [cus_id, setCusid] = useState(''); 
  const [show, setShow] = useState(false);

 
 

  return (    
    <div className='Info'>
    <h2>Searching for staff?</h2>
      <h3 >Please enter the category of new staff</h3>                    
              <select placeholder='Select Restaurant ID' style={{width: 300}} value={staff_cat} onChange={e => setCat(e.target.value)}>           
              <option value="Choose one category">Choose one category</option>     
              <option value="Waiters">Waiters</option>   
              <option value="Chefs">Chefs</option>   
              <option value="Cashiers">Cashiers</option>   
              </select>                       
            <br/>
        <h3>Please enter the staff ID</h3>
        
        <input placeholder='Name' value={staff_id} onChange={e => setStaffid(e.target.value)} />   
        <br/>  
        <div>    
        <button onClick={async () => {
                    const user = {staff_cat, staff_id};
                    const response = await fetch('http://35.211.4.196:5000/info',{
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(user)
                    })
                    if (response.ok) {
                        console.log(response);                        
                        fetch('http://35.211.4.196:5000/info', {
                              'method':'GET',      
                              header:{
                                'Content-Type':'application/json'
                              }
                            })
                            .then(data => data.json())
                            .then(resp => setData(resp))
                            .catch(error => console.log(error))                          
                    }
                    console.log(data)
                }
                }>
                    submit
        </button>
        </div>  
        <br></br>
        <Container >            
            <ol>
            <li>
                Name: {data.sname}
            </li>
            <li>
                SSN: {data.SSN}
            </li>
            <li>
                Hired Date: {data.hired_date}
            </li>
            <li>
                Salary: {data.salary}
            </li>
            <li>
                Shift: {data.shift}
            </li>
            </ol>
        </Container>
        <br></br>
        <br></br>

<h2>Searching for customers?</h2>
      
        <h3>Please enter the customer ID</h3>
        
        <input placeholder='ID' value={cus_id} onChange={e => setCusid(e.target.value)} />   
        <br/>  
        <div>    
        <button onClick={async () => {
                    const user = {cus_id};
                    const response = await fetch('http://35.211.4.196:5000/info_cus',{
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(user)
                    })
                    if (response.ok) {
                        console.log(response);                        
                        fetch('http://35.211.4.196:5000/info_cus', {
                              'method':'GET',      
                              header:{
                                'Content-Type':'application/json'
                              }
                            })
                            .then(data => data.json())
                            .then(resp => setData(resp))
                            .catch(error => console.log(error))                          
                    }
                    console.log(data)
                }
                }>
                    submit
        </button>
        </div>  
        <br></br>
        <Container >            
            <ol>
            <li>
                Name: {data.cname}
            </li>
            <li>
                Email: {data.email}
            </li>            
            </ol>
        </Container>
        <br></br>
        <br></br>
 
        

        <div>
            <a href='/staff/manager_home'>
            <button type="button" class="cancelbtn">Back</button>
            </a>
        </div>
        

    </div>
    
  )
}

export default Info
