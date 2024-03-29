import React from "react";
import styled from "styled-components";
import { FoodLabel } from "../Menu/FoodGrid";
import Button from "../Reusables/Button";
import { formatPrice } from "../../Data/FoodData";

const Dialog = styled.section`
  width: 50vw;
  min-height: 70vh;
  background-color: #fff;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 4;
  display: flex;
  flex-direction: column;
`;

const DialogShadow = styled.div`
  position: fixed;
  height: 100%;
  width: 100vw;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 3;
`;
const DialogBanner = styled.div`
  width: 100%;
  min-height: 20rem;
  margin-bottom: 2rem;
  ${props => `background: url(${props.img}) center / cover no-repeat;`}
`;
const DialogBannerName = styled(FoodLabel)`
  font-family: "Righteous";
  font-size: 3rem;
  transform: translate(1rem, 2rem);
  padding: 0.5rem;
`;

const DialogContent = styled.div`
  width: 100%;
  min-height: 30rem;
  max-height: 65vh;
  overflow: auto;
`;
const DialogFooter = styled.footer`
  width: 100%;
  min-height: 6rem;
  box-shadow: 0 -2px 20px 0 gray;
  margin-top: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function FoodDialogContainer({
  openFood,
  setOpenFood,
  setOrders,
  orders
}) {
  function close() {
    setOpenFood(null);
  }

  function addToOrder() {
    if (!openFood) return null;
    const order = {
      ...openFood
    };
  
    setOrders([...orders, order]);
    close();
  }
  return openFood ? (
    <>
      <Dialog>
        <DialogBanner img={openFood.img}>
          <DialogBannerName>{openFood.name}</DialogBannerName>
        </DialogBanner>
        <DialogContent />
        <DialogFooter>
          <Button
            type="button"
            addToOrder={addToOrder}
            text={`Add to order: ${formatPrice(openFood.price)}`}
          />
        </DialogFooter>
      </Dialog>
      <DialogShadow onClick={close} />
    </>
  ) : null;
}

export default function FoodDialog(props){
    if(!props.openFood) return null;
    return <FoodDialogContainer {...props} />
}