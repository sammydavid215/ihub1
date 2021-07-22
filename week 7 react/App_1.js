import logo from './logo.svg';
import './App.css';
import UserCard from './UserCard';
//import Button3 from './Button3';

function App() {
  const User = {
    name: 'Elon musk',
      location: 'Las Vegas',
      foodType: 'Everything',
      age: 28,
      likes: 'Coding into the wee hours of the morning',
      twitterUsername: 'Elon Musk',
      avatar:'https://scotch-res.cloudinary.com/image/upload/v1556479698/xRZsnhr0_400x400_cpyg2t.png'
   // Name: 'Ogechukwu okoh', 
    //Age: 23,
    //Height: 130};
    //const handleProduct = () => {
      //alert(User.title);
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
    <UserCard myProduct = {User}/>
    <UserCard myProduct = {User_1}/>
    </div>
  );
    
  }


export default App;