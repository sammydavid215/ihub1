import React, { useState, useEffect } from 'react'
import axios from 'axios'

import './display.css'
function Display(){
    const url = 'https://swapi.dev/api/people/?page=2'
    const[Display, setDisplay] = useState(null)
    let content = null
    useEffect(() => {
        axios.get(url)
        .then(response => {
            setDisplay(response.data)
        })
    }, [url])
    if(Display){
        content = <div>
            <h1>{Display.name}</h1>
            <div>
            <img src={Display.image[0].imageurl} alt={Display.name}/> 
        </div>
        <div>
            {Display.gender}
        </div>
        <div>
            {Display.height}
        </div>
        </div>
    }
    return (
        <div>
            {content}
        </div>
    )
}

export default Display