import React from 'react';
import {useState, useEffect} from 'react';
import '../styles/Register.css';


function Manager_adjustment() {
  const [data, setData] = useState([]);
  const [staff_cat, setCat] = useState('');
  const [staff_id, setID] = useState('');
  const [name, setName] = useState('');
  const [SSN, setSSN] = useState('');
  const [hired_date, setDate] = useState('');
  const [salary, setSalary] = useState('');
  const [shift, setShift] = useState('');
  const [show, setShow] = useState(false);
 

  return (    
    <div className='Hire'>
        <h1> Staff Info Update</h1>   
        <h3 >Please enter staff category</h3>                    
              <select placeholder='Select Restaurant ID' style={{width: 300}} value={staff_cat} onChange={e => setCat(e.target.value)}>  
              <option value="Choose one category">Choose one category</option>           
              <option value="Waiters">Waiters</option>       
              <option value="Chefs">Chefs</option>   
              <option value="Cashiers">Cashiers</option>   
              </select>                       
            <br/>
        <h3 >Please enter staff ID</h3> 

            <input placeholder='ID' value={staff_id} onChange={e => setID(e.target.value)} required />   
            <br/> 
                
        <h3>Please enter the information you want to update</h3>
        <h3>Leave the information you do not want to change BLANK</h3>
        
        <input placeholder='Name' value={name} onChange={e => setName(e.target.value)} />   
        <br/>
        <input placeholder='SSN' value={SSN} onChange={e => setSSN(e.target.value)} />  <br/>
        <input placeholder='Hired Date' value={hired_date} onChange={e => setDate(e.target.value)} />  <br/>
        <input placeholder='Anual Salary' value={salary} onChange={e => setSalary(e.target.value)} />  <br/>
        <input placeholder='Shift' value={shift} onChange={e => setShift(e.target.value)} /> <br/>
        <button onClick={async () => {
                    const info = {staff_cat, staff_id, name, SSN, hired_date, salary, shift};
                    const response = await fetch('http://35.211.4.196:5000/adjustment',{
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(info)
                    })

                    
                    if (response.ok) {
                        console.log(response);
                        setShow(true)
                    }
                    else {
                        setShow(false)
                    }
                }
                }>
                    submit
        </button>
        <div>
                <a href='/staff/manager_home'>
                <button type="button" class="cancelbtn">Back</button>
                </a>
            </div>
        <div>
        {
            show && <div >You are all set</div>
        }
                
        </div>




    
   
    </div>
  )
}

export default Manager_adjustment