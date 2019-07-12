import React from "react";
import styled from "styled-components";
import Button from "../Reusables/Button";
import {formatPrice} from "../../Data/FoodData";


const OrderList = styled.ul`
  list-style: none;
  width: 100%;
`;
const OrderItem = styled.li`
  border: 2px solid gray;
  width: 100%;
  padding: 1rem;
  margin-top: .3rem;
  display: grid;
  grid-template-columns: 2rem 15rem 2rem 6rem;
  justify-content: space-between;
`;
const Order = ({ className, orders }) => {
  return (
    <section className={className}>
      {orders.length === 0 ? (
        <p>Your order seems pretty empty</p>
      ) : (
        <OrderList>
            Items to be ordered:
            {orders.map(order => {
                return (
                    <OrderItem>
                    <span>1</span>
                    <span>{order.name}</span>
                    <span>{formatPrice(order.price)}</span>
                    </OrderItem>
                )
            })}
        </OrderList>
      )}
      <Button text="order now" />
    </section>
  );
};

export default styled(Order)`
  position: fixed;
  right: 0;
  top: 4.9rem;
  height: 100vh;
  width: 32vw;
  background-color: #fff;
  box-shadow: 2px 2px 20px 2px gray;
  display: flex;
  flex-direction: column;
  background-color: orange;
  justify-content: space-between;
  align-items: center;
  p {
    min-height: 30vh;
    /* background-color: blue; */
    width: 100%;
  }
  button {
    margin-bottom: 6vh;
    width: 60%;
  }
  ul {
      max-height: 70vh;
      overflow: auto;
  }
`;
