import React from 'react';
import LandingPage from './components/LandingPage/LandingPage';
import {Routes, Route} from "react-router-dom"; 
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Dashboard from './components/Dashboard/Dashboard';

class App extends React.Component {
  render () {
    return (
      <Routes>
        <Route path = "/" element = {<LandingPage/>} />
        <Route path = "login" element = {<Login />} /> 
        <Route path = "signup" element = {<Signup/>} />
        <Route path = "dashboard" element = {<Dashboard/>} />
      </Routes>
    )
  }
}

export default App;
