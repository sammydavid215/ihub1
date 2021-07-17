import logo from './logo.svg';
import './App.css';
import Button	from './button';
import Button2 from './Button2';
import Card from './Card';
//import Button3 from './Button3';

function App() {
  const products = {
    title: 'my Shoe', 
    description: 'Gucci shoe',
    Price: 100000}
  return (
    <div className="App">
    <Button/> 
    <Button2/>
    <Card myProduct = {products}/>
    </div>
  );
    
  }


export default App;
