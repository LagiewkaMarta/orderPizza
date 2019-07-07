import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Open Sans', sans-serif;
    background-color: red;
  }
  h1, h2, h3 {
    font-family: 'Righteous', cursive;
  }
`;


function App() {
  return (
    <>
      <GlobalStyle />
      <h1>Sliceline</h1>
      <div>hello</div>
    </>
  );
}

export default App;
