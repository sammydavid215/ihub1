import './App.css'
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';
import HomePage from './Pages/HomePage';
import LogInPage from './Pages/LogInPage';
import React from "react";
//import Home from './pages/Home';
//import About from './pages/About';
//import Contact from './pages/Contact';
//import Forms from './Forms'

import {Switch, Route, Link} from "react-router-dom";

function App() {
  return (

    <div>
     <nav>
       <Link to="/AboutPage">About Page</Link>
      <Link to="/ContactPage">Contact Page</Link>
      <Link to="/LogInPage">Log In Page</Link>
      <Link to="/HomePage">Home Page</Link>
      
      </nav>
   
     

     <Switch>
     <Route path="/AboutPage">
       <AboutPage/>
       </Route>
       <Route path="/LogInPage">
       <LogInPage/>
     </Route>
     <Route path="/ContactPage">
       <ContactPage/>
     </Route>
     <Route path="/HomePage">
       <HomePage/>
     </Route>
     </Switch>

    </div>
  )
}


export default App