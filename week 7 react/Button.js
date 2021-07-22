//import { Component } from 'react';
//export class MyComponent extends Component {
    import React from 'react'; 
    import './style.css';
    export default class Button extends React.Component{
    render() {
        return(
            <div>
            <img src = "https://scotch-res.cloudinary.com/image/upload/v1556479698/xRZsnhr0_400x400_cpyg2t.png" alt = ",,"/>
            
            <h2 class = "name" >{this.props.Mypage.name}</h2>
            <label for = "Locatoion:" >Locatoin</label>
            <b><p class = "location">{this.props.Mypage.location}</p></b>
            <label for = "Food Type:" >Food Type:</label>
            <b><p>{this.props.Mypage.foodType}</p></b>
            <label for = "Age:" >Age:</label>
            <b><p>{this.props.Mypage.age}</p></b>
            <label for = "Likes: " >Likes: </label>
            <b><p>{this.props.Mypage.likes}</p></b>
            <label for = "Twitter Username" >Twitter Username:</label>
            <b><p>{this.props.Mypage.twitterUsername}</p></b>
            </div>

        );}
        }