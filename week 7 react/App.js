import logo from './logo.svg';
import './App.css';
import Button from './Button';
function App() {
  const user = {
      name: 'Elon musk',
      location: 'Las Vegas',
      foodType: 'Everything',
      age: 28,
      likes: 'Coding into the wee hours of the morning',
      twitterUsername: 'Elon Musk',
      avatar:'https://scotch-res.cloudinary.com/image/upload/v1556479698/xRZsnhr0_400x400_cpyg2t.png'
    };
    const User_1 = {
      name: 'Chris Morgan',
      location: 'Florida',
      foodType: 'Chiken and Chips',
      age: 45,
      likes: 'Swimming and Reading',
      twitterUsername: 'Morgan45',
      avatar:'https://scotch-res.cloudinary.com/image/upload/v1556479698/xRZsnhr0_400x400_cpyg2t.png'
    
    };
  return (
    <div className="App">
      
      <Button Mypage =  {user} />
      <Button Mypage =  {User_1} />
    </div>
  );
    //<div className="App">
      //<header className="App-header">
      //  <img src={logo} className="App-logo" alt="logo" />
        //<p>
        //  Edit <code>src/App.js</code> and save to reload.
        //</p>
       // <a
        //  className="App-link"
        //  href="https://reactjs.org"
        //  target="_blank"
        //  rel="noopener noreferrer"
        //>
         // Learn React
       // </a>
      //</header>
    //</div>  
}

export default App;
