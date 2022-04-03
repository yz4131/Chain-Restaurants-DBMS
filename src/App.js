
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import User from './pages/User';
import Staff from './pages/Staff';
import Waiter_home from './pages/waiter_home';
import Waiter_shift from './pages/waiter_shift';
import Waiter_salary from './pages/waiter_salary';
import Waiter_tips from './pages/waiter_tips';
import Manager_home from './pages/manager_home';
import Cashier_home from './pages/cashier_home';
import Cashier_shift from './pages/cashier_shift';
import Cashier_salary from './pages/cashier_salary';
import Chef_home from './pages/chef_home';
import Chef_shift from './pages/chef_shift';
import Chef_salary from './pages/chef_salary';
import Chef_cook from './pages/chef_cook';
import Order from './pages/Orders';
import React, {useState, useEffect} from 'react';
import Register from './pages/Register';
import Check from './pages/Check';
import Hire from './pages/Hire.js';
import Manager_adjustment from './pages/manager_adjustment';
import Info from './pages/Staff_info.js';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
  <div className="App">
    <Router>
      <Navbar />
      <Routes>        
        <Route exact path="/" element={<Home/>}/>
        <Route exact path='/user' element={<User/>}/>
        <Route exact path='/order' element={<Order/>}/>
        <Route exact path='/staff' element={<Staff/>}/>
        <Route exact path='/staff/waiter_home' element={<Waiter_home/>}/>
        <Route exact path='/staff/waiter_home/waiter_shift' element={<Waiter_shift/>}/>
        <Route exact path='/staff/waiter_home/waiter_salary' element={<Waiter_salary/>}/>
        <Route exact path='/staff/waiter_home/waiter_tips' element={<Waiter_tips/>}/>
        <Route exact path='/staff/manager_home' element={<Manager_home/>}/>
        <Route exact path='/staff/manager_home/hire' element={<Hire/>}/>
        <Route exact path='/staff/manager_home/staff_info' element={<Info/>}/>
        <Route exact path='/staff/manager_home/adjustment' element={<Manager_adjustment/>}/>
        <Route exact path='/staff/cashier_home' element={<Cashier_home/>}/>
        <Route exact path='/staff/cashier_home/register' element={<Register/>}/>
        <Route exact path='/staff/cashier_home/cashier_shift' element={<Cashier_shift/>}/>
        <Route exact path='/staff/cashier_home/cashier_salary' element={<Cashier_salary/>}/>
        <Route exact path='/staff/cashier_home/register/check' element={<Check/>}/>
        <Route exact path='/staff/chef_home' element={<Chef_home/>}/>
        <Route exact path='/staff/chef_home/chef_shift' element={<Chef_shift/>}/>
        <Route exact path='/staff/chef_home/chef_salary' element={<Chef_salary/>}/>
        <Route exact path='/staff/chef_home/chef_cook' element={<Chef_cook/>}/>
        
      </Routes>
      <br/>
      <br/>
      <br/>
      <Footer />
    </Router>
    
  </div>
);
  
}

export default App;
