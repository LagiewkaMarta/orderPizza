import React from "react";
import GlobalStyle from "./components/GlobalStyles";
import NavBar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import Menu from "./components/Menu/Menu";
import banner from "./img/banner.jpg";



function App() {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Banner banner={banner}/>
      <Menu/>
    </>
  );
}

export default App;
