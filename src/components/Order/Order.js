import React from "react";
import styled from "styled-components";
import Button from "../Reusables/Button";

const Order = ({className, orders}) => {
    return (
        <section className={className}>
{orders.length}
            <Button text="order now"/>
        </section>
    )
}

export default styled(Order)`
position: fixed;
right: 0;
top: 4.9rem;
height: 100vh;
width: 32vw;
background-color: #fff;
box-shadow: 2px 2px 20px 2px gray;
display: flex;
flex-direction: column;
background-color: orange;
justify-content: space-between;
align-items: center;
p{
    min-height: 30vh;
    background-color: blue;
    width: 100%;
}
button {
    margin-bottom: 6vh;
    width: 60%;
}
`