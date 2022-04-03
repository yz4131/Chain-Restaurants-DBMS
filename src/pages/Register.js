import React from 'react';
import {useState, useEffect} from 'react';
import { Container } from 'semantic-ui-react';
import { Regis } from '../components/regis';
import '../styles/Register.css';


function Register() {
  const [data, setData] = useState([])

  //useEffect(() => {
    //fetch('http://127.0.0.1:5000/order', {
      //'method':'GET',      
      //header:{
      //  'Content-Type':'application/json'
      //}
    //})
    //.then(data => data.json())
    //.then(resp => setData(resp))
    //.catch(error => console.log(error))
  //},[])
  //{data.name}

  return (    
    <div className='Register'>
      <h1 > Order Info </h1>

      <Container className='container'>
        <Regis  />                
      </Container>      
    </div>
  )
}

export default Register
