import img1 from "../img/pizza.png";
import img2 from "../img/pizza2.jpeg";
import img3 from "../img/burger.jpeg";
import img4 from "../img/chicken-fingers.jpeg";
import img5 from "../img/chicken-pizza.jpeg";
import img6 from "../img/fries.jpeg";
import img7 from "../img/gyro.jpeg";
import img8 from "../img/healthy-pizza.jpeg";
import img9 from "../img/sandwich.jpeg";

export const foodItems = [
  { name: "Cheese Pizza", img: img1, section: "Pizzas" },
  { name: "Pepperoni Pizza", img: img2, section: "Pizzas" },
  { name: "Burger", img: img3, section: "Burgers" },
  { name: "Chicken Fingers", img: img4, section: "Sides" },
  { name: "Chicken Pizza", img: img5, section: "Pizzas" },
  { name: "Fries", img: img6, section: "Sides" },
  { name: "Gyro", img: img7, section: "Sandwiches" },
  { name: "Healthy Pizza", img: img8, section: "Pizzas" },
  { name: "Sandwich", img: img9, section: "Sandwiches" }
];

// grouping foods into sections
export const foods = foodItems.reduce((acc, curr) => {
  if(!acc[curr.section]) {
    acc[curr.section] = []
  }
  acc[curr.section].push(curr)
  return acc
}, {})