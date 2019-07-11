import styled from "styled-components";

export const FoodGrid = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-gap: 2rem;
width: 60vw;
`
export const Food = styled.div`
height: 10rem;
margin: .8rem .5rem .4rem .5rem;
padding: 1rem;
background: url(${({img}) => img}) center / cover no-repeat;
filter: contrast(80%);
-webkit-filter: contrast(80%);
font-family: "Righteous", sans-serif;
font-size: 2rem;
border-radius: .7rem;
box-shadow: 0 0 .6rem 0 gray;
opacity: .8;
transform: translateY(0);
transition: all .3s;
&:hover {
    cursor: pointer;
    opacity: 1;
    transform: translateY(-5px);
}
`
export const FoodLabel = styled.div`
position: absolute;
background-color: rgba(255,255,255, .8);
padding: .5rem;
`