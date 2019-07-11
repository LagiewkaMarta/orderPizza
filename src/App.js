import React, {useState} from "react";
import GlobalStyle from "./components/GlobalStyles";
import NavBar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import Menu from "./components/Menu/Menu";
import banner from "./img/banner.jpg";
import FoodDialog from "./components/FoodDialog/FoodDialog";
import Order from "./components/Order/Order";


function App() {
  const [openFood, setOpenFood] = useState();
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Banner banner={banner}/>
      <Menu setOpenFood={setOpenFood}/>
      <FoodDialog openFood={openFood} setOpenFood={setOpenFood}/>
      <Order/>
    </>
  );
}

export default App;
