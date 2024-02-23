import {Headerfont, Middlefont} from '../styled-component-files/Header-style';
import React, { useState } from 'react';



const Header = () => {
    const [count, setCount] = useState(0);
    const handleClick =()=> {
        setCount (count + 1);
    }
    return(
        <Middlefont>
        <Headerfont>Best Pizza in town! Yummy!</Headerfont>
        <button onClick = {handleClick}> I was pressed {count} times!</button>
        </Middlefont>
     
    )
}

export {Header};