import React from "react";
import { createGlobalStyle } from "styled-components";
import NavBar from "./Navbar/Navbar";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'Open Sans', sans-serif;
  }
  h1, h2, h3 {
    font-family: 'Righteous', cursive;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <NavBar />
    </>
  );
}

export default App;
