import React from 'react';
import {useState, useEffect} from 'react';
import '../styles/Register.css';


function Hire() {
  const [data, setData] = useState([]);
  const [staff_cat, setCat] = useState('');
  const [name, setName] = useState('');
  const [SSN, setSSN] = useState('');
  const [date, setDate] = useState('');
  const [salary, setSalary] = useState('');
  const [shift, setShift] = useState('');
  const [show, setShow] = useState(false);
 

  return (    
    <div className='Hire'>
      <h3 >Please enter the category of new staff</h3>                    
              <select placeholder='Select Restaurant ID' style={{width: 300}} value={staff_cat} onChange={e => setCat(e.target.value)}>  
              <option value="Choose one category">Choose one category</option>           
              <option value="Waiters">Waiters</option>       
              <option value="Chefs">Chefs</option>   
              <option value="Cashiers">Cashiers</option>   
              </select>                       
            <br/>
        <h3>Please enter the basic information for the new staff</h3>
        
        <input placeholder='Name' value={name} onChange={e => setName(e.target.value)} />   
        <br/>
        <input placeholder='SSN' value={SSN} onChange={e => setSSN(e.target.value)} />  <br/>
        <input placeholder='Hired Date' value={date} onChange={e => setDate(e.target.value)} />  <br/>
        <input placeholder='Anual Salary' value={salary} onChange={e => setSalary(e.target.value)} />  <br/>
        <input placeholder='Shift' value={shift} onChange={e => setShift(e.target.value)} /> <br/>
        <button onClick={async () => {
                    const user = {staff_cat, name, SSN, date, salary, shift};
                    const response = await fetch('http://35.211.4.196:5000/hire',{
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(user)
                    })
                    if (response.ok) {
                        console.log(response);
                        setShow(true)
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

export default Hire
