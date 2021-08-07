import './App.css';

import React from 'react'
import Product from './Component/Product';
import { useState } from 'react';
function App() {
  const [count, setCount] = useState(0);
  const [isLog, setIsLog] = useState(true)
  const handleClick = () => {
    setCount(count + 1);

  };

const handlelogClick = () => {
setIsLog(!isLog);
}

    return(
      <div className="App">
        {isLog ?<p>We are Loggeed In</p>:<p> You are Looged Out, Please Log in Again!</p>}
        <button onClick={handlelogClick}>{isLog ? <span>Log Out</span>:<span>Log In</span>} </button>
        <Product count={count} handleClick={handleClick}/>
        </div>
    );
  }
export default App;
import './App.css';

import React from 'react'
import Product from './Component/Product';
import { useState } from 'react';
function App() {
  const [count, setCount] = useState(0);
  const [isLog, setIsLog] = useState(true)
  const handleClick = () => {
    setCount(count + 1);

  };

const handlelogClick = () => {
setIsLog(!isLog);
}

    return(
      <div className="App">
        {isLog ?<p>We are Loggeed In</p>:<p> You are Looged Out, Please Log in Again!</p>}
        <button onClick={handlelogClick}>{isLog ? <span>Log Out</span>:<span>Log In</span>} </button>
        <Product count={count} handleClick={handleClick}/>
        </div>
    );
  }
export default App;
