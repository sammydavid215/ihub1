import './App.css';
import React from 'react'
import Products from './Component/Products';
import {Switch, Route, Link, Router, NavLink, useParams} from 'react-router-dom';
function App() {
  
    return(
      <div className="App">
        <NavLink to = "/Products"> Products</NavLink>
        <Route path="/Products/:id">
        <Products/>
        </Route>
    
        </div>
    );}
  
export default App;