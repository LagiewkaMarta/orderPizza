import React, {useState} from "react";
import GlobalStyle from "./components/GlobalStyles";
import NavBar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import Menu from "./components/Menu/Menu";
import banner from "./img/banner.jpg";



function App() {
  const [openFood, setOpenFood] = useState();
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Banner banner={banner}/>
      <div>{openFood}</div>
      <Menu setOpenFood={setOpenFood}/>
    </>
  );
}

export default App;
