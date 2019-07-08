import React from "react";
import styled from "styled-components";
import { Title } from "../../Styles/title";
import { pizzaRed } from "../../Styles/colors";

const Logo = styled(Title)`
  font-size: 20px;
  color: #fff;
  text-shadow: 1px 2px 4px #380502;
`;
const Navbar = ({ className }) => {
  return (
    <nav className={className}>
      <Logo>SliceLine <span role="img" aria-label="pizza emoji">🍕</span></Logo>
    </nav>
  );
};
export default styled(Navbar)`
  background-color: ${pizzaRed};
  padding: 10px;
  position: fixed;
  width: 100%;
`;
