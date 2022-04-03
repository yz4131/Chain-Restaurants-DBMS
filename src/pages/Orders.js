import React from 'react';
import {useState, useEffect} from 'react';
import { Container } from 'semantic-ui-react';
import { UserForm } from '../components/UserForm';


function Orders() {
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
    <div>
      <Container style={{ marginTop: 40}}>
        <UserForm />      
      </Container>      
    </div>
  )
}


export default Orders
