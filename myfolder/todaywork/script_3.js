//const number = prompt('Enter a value:');
//let squareRoot = Math.sqrt(number);
//console.log(squareRoot)
//document.getElementById('sqr').innerHTML = `the square root of ${number} is ${squareRoot}`
//document.getElementById('sqr2').innerHTML = 'the square root of ' + number +' is' + squareRoot;

//const base = prompt('enter a value:');
//const height = prompt('enter a value:');

//let Area = 1/2*(base*height)
//console.log('the area is', Area)

const password1 = document.forms.p1;
const password2 = document.forms.p2;

const submitbtn =document.querySelector('#submit');
submitbtn.addEventListener('click', function(e){ e.preventDefault();
    
if (password1 !== password2){
    alert('password mismatch');
    return false;}else { alert('form submitted');}
});