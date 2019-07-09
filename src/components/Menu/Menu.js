import React from "react";
import styled from "styled-components";
import {foods} from "../../Data/FoodData";
import {Food, FoodGrid, FoodLabel} from "./FoodGrid";
const Menu = ({className, setOpenFood}) => {
    return (
        <section className={className}>
            <h2>Menu</h2>
            <FoodGrid>
            {foods.map( ({img, name}) => ( <Food onClick={() => {setOpenFood(name)}} img={img}><FoodLabel><h3>{name}</h3></FoodLabel></Food>))}
            </FoodGrid>
        </section>
    )
}

export default styled(Menu)`
min-height: 50vh;
min-width: 60vw;
max-width: 75vw;
h2{
    font-size: 4.5rem;
}
`