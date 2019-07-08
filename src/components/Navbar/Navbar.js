import React from "react";
import styled from "styled-components";
import { Title } from "../../Styles/title";
import { pizzaRed } from "../../Styles/colors";

const Logo = styled(Title)`
  font-size: 2rem;
  color: #fff;
  text-shadow: .1rem .2rem .4rem #380502;
`;
const Navbar = ({ className }) => {
  return (
    <nav className={className}>
      <Logo>SliceLine <span role="img" aria-label="pizza emoji">🍕</span></Logo>
    </nav>
  );
};
export default styled(Navbar)`
  /* z-index for Navbar to display over Banner */
  z-index: 2;
  background-color: ${pizzaRed};
  padding: 1rem;
  position: fixed;
  width: 100%;
`;
