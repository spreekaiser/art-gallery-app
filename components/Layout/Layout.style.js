import styled from "styled-components";
import HeartBlobSVG from "../../public/icons/heart-blob.svg";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 4rem 1rem;
`;

// export const StyledHeartBlob = styled(HeartBlobSVG)`
// fix for jest
export const HeartBlob = styled((props) => <HeartBlobSVG {...props} />)`
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
