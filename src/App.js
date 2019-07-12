import React from "react";
import GlobalStyle from "./components/GlobalStyles";
import NavBar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import Menu from "./components/Menu/Menu";
import banner from "./img/banner.jpg";
import FoodDialog from "./components/FoodDialog/FoodDialog";
import Order from "./components/Order/Order";
//importing hooks
import {useOpenFood} from "./Hooks/useOpenFood";
import {useOrders} from "./Hooks/useOrders";
import {useTitle} from "./Hooks/useTitle";

function App() {
  const openFood = useOpenFood()
  const orders = useOrders()
  useTitle({...openFood, ...orders})
   return (
    <>
      <GlobalStyle />
      <NavBar />
      <Banner banner={banner}/>
      <Menu {...openFood}/>
      <FoodDialog {...openFood} {...orders}/>
      <Order {...orders}/>
    </>
  );
}

export default App;
