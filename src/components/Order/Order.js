import React from "react";
import styled from "styled-components";

const Order = ({className}) => {
    return (
        <section className={className}>
            Your order looks pretty empty. 
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
`