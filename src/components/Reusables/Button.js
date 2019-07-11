import React from 'react';
import styled from "styled-components";
import {pizzaRed} from "../../Styles/colors";

const Button = (props) => {
    // different handleClicks depending on the functionality of the button
    function handleClick(){
        if (props.addToOrder){
            props.addToOrder()
        }
    }
    return (
        <button onClick={handleClick} className={props.className}>{props.text}</button>
    )
}

export default styled(Button)`
background-color: ${pizzaRed};
color: #fff;
padding: 1rem 2rem;
border-radius: .5rem;
font-size: 1.8rem;
text-transform: uppercase;
font-family: "Open Sans";
`