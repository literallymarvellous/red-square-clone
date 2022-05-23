import React from "react";
import styled from "styled-components";
import { usePageContext } from "../../hooks/pageContext";

const Backdrop = () => {
  const context = usePageContext();
  const backdrop = context?.backdrop;

  return (
    <Wrapper
      style={
        backdrop
          ? {
              opacity: "0.8",
              position: "absolute",
              transition: "opacity 300ms ease-out",
            }
          : {
              opacity: "0",
              position: "relative",
              transition: "opacity 5000ms",
            }
      }
    ></Wrapper>
  );
};

const Wrapper = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  background: var(--color-black);
  /* background: radial-gradient(
    circle at 0% 50%,
    #201f20,
    #1f1e1f,
    #1b1a1b,
    #161616,
    #101010,
    #090909,
    #020202,
    #000000
  ); */
  transition: opacity 5000ms ease-in;
`;

export default Backdrop;
