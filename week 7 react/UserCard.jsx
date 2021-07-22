import React from 'react'

export default function UserCard(props) {
    return (
        <div>
            <img src = "https://scotch-res.cloudinary.com/image/upload/v1556479698/xRZsnhr0_400x400_cpyg2t.png" alt =" "/>
            <ul><h2>Name:   {props.myProduct.name}</h2>
            <label for = "age:" >age:</label>
            <b><p>{props.myProduct.age}</p></b>
            <label for = "foodType:" >foodType;</label>
            <b><p>Food Type:   {props.myProduct.foodType}</p></b>
            <label for = "Locatoion:" >Locatoin</label>
            <b><p>{props.myProduct.location}</p></b>
            <label for = "likes" >likes:</label>
            <b><p>{props.myProduct.likes}</p></b>
            <label for = "twitterUsername:" >twitterUsername</label>
            <b><p>{props.myProduct.twitterUsername}</p></b>
            
            <button onClick={props.myClick}>Save Record</button></ul>
    
        </div>
    );
}