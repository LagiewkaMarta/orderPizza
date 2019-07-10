import React from "react";
import styled from "styled-components";
import { foods } from "../../Data/FoodData";
import { Food, FoodGrid, FoodLabel } from "./FoodGrid";
const Menu = ({ className, setOpenFood }) => {
  return (
    <section className={className}>
      <h2>Menu</h2>
      {Object.entries(foods).map(([sectionName, foods]) => (
        <>
          <h3>{sectionName}</h3>
          <FoodGrid>
            {foods.map(food => (
              <Food
                onClick={() => {
                  setOpenFood(food);
                }}
                img={food.img}
              >
                <FoodLabel>
                  <h4>{food.name}</h4>
                </FoodLabel>
              </Food>
            ))}
          </FoodGrid>
        </>
      ))}
    </section>
  );
};

export default styled(Menu)`
  min-height: 50vh;
  min-width: 60vw;
  max-width: 75vw;
  h2 {
    font-size: 4.5rem;
  }
  h3 {
    font-size: 3rem;
  }
`;
