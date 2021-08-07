import logo from './logo.svg';
import './App.css';
import Button	from './button';
import Button2 from './Button2';
import Card from './Card';
import UserCard from './UserCard';
//import Button3 from './Button3';
import User from './Component/User'
//import Button3 from './Button3';
function App() {
  const user = [{
      name: 'Elon musk',
      location: 'Las Vegas',
      foodType: 'Everything',
      age: 28,
      likes: 'Coding into the wee hours of the morning',
      twitterUsername: 'Elon Musk',
      avatar:'https://scotch-res.cloudinary.com/image/upload/v1556479698/xRZsnhr0_400x400_cpyg2t.png'
    },
    {
      name: 'Chris Morgan',
      location: 'Florida',
      foodType: 'Chiken and Chips',
      age: 45,
      likes: 'Swimming and Reading',
      twitterUsername: 'Morgan45',
      avatar:'https://scotch-res.cloudinary.com/image/upload/v1556479698/xRZsnhr0_400x400_cpyg2t.png'
    
    }];
  return (
    <div className="App">
      
      <User myUser =  {user} />
      
    </div>
  );}

export default App;