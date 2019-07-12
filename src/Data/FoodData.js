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
  { name: "Cheese Pizza", img: img1, section: "Pizzas", price: 1 },
  { name: "Pepperoni Pizza", img: img2, section: "Pizzas", price: 1.5 },
  { name: "Burger", img: img3, section: "Burgers", price: 3.5 },
  { name: "Chicken Fingers", img: img4, section: "Sides", price: 4 },
  { name: "Chicken Pizza", img: img5, section: "Pizzas", price: 2 },
  { name: "Fries", img: img6, section: "Sides", price: 4 },
  { name: "Gyro", img: img7, section: "Sandwiches", price: 6 },
  { name: "Healthy Pizza", img: img8, section: "Pizzas", price: 3 },
  { name: "Sandwich", img: img9, section: "Sandwiches", price: 6.5 }
];

// grouping foods into sections
export const foods = foodItems.reduce((acc, curr) => {
  if (!acc[curr.section]) {
    acc[curr.section] = [];
  }
  acc[curr.section].push(curr);
  return acc;
}, {});

//formatting prices 
export function formatPrice(price) {
  return price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
  });
}