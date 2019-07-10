import React from "react";
import styled from "styled-components";
import { FoodLabel } from "../Menu/FoodGrid";

const Dialog = styled.section`
  width: 50vw;
  min-height: 70vh;
  background-color: #fff;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 4;
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
  min-height: 20rem;
  margin-bottom: 2rem;
  ${props => `background: url(${props.img}) center / cover no-repeat;`}
`;
const DialogBannerName = styled(FoodLabel)`
  font-family: "Righteous";
  font-size: 3rem;
  transform: translate(1rem, 2rem);
  padding: .5rem;
`;
export default function FoodDialog({ openFood, setOpenFood }) {
  function close() {
    setOpenFood(null);
  }
  return openFood ? (
    <>
      <Dialog>
        <DialogBanner img={openFood.img}>
          <DialogBannerName>{openFood.name}</DialogBannerName>
        </DialogBanner>
      </Dialog>
      <DialogShadow onClick={close} />
    </>
  ) : null;
}
