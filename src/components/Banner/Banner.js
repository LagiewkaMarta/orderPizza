import styled from "styled-components";

export default styled.header`
height: 70vh;
width: 65vw;
background: url(${props => props.banner}) center / cover no-repeat;
filter: contrast(60%);
-webkit-filter: contrast(60%);
`