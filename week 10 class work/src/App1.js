import logo from './logo.svg';
import './App.css';
import Button	from './button';
import Button2 from './Button2';
import Card from './Card';
import User from './Component/User_1'
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
    export default User;

      // Name: 'Ogechukwu okoh', 
   // Age: 23,
    //Height: 130};
    //const handleProduct = () => {
      //alert(User.title);
   // }
  //return (
   // <div className="App">
    //<UserCard myProduct = {User}/>
    //</div>
  //);
    
  //}
  //function App() {
  //const products = {
    //title: 'my Shoe', 
    //description: 'Gucci shoe',
    //Price: 100000};
    //const handleProduct = () => {
      //alert(products.title);
    //}
  //return (
    //<div className="App">
    //<Button/> 
    //<Button2/>
    //<Card myProduct = {products} myClick = {handleProduct}/>
    //</div>
  //);
    //
  //}
//function App() {
 // const User = {
   // Name: 'Ogechukwu okoh', 
   // Age: 23,
    //Height: 130};
    //const handleProduct = () => {
      //alert(User.title);
   // }
  //return (
   // <div className="App">
    //<UserCard myProduct = {User}/>
    //</div>
  //);
    
  //}