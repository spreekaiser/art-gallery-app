import styled from "styled-components";
import HeartBlob from "../../assets/heart-blob.svg";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* padding: 10%; */
`;

export const StyledHeartBlob = styled(HeartBlob)`
  position: fixed;
  top: 40%;
  left: 70%;
  transform: translate(-50%, -50%);
  z-index: -100;
  height: 30rem;
  width: 30rem;
  rotate: 10deg;
  fill: var(--accent-color2);
`;
