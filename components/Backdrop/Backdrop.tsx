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
              backdropFilter: "blur(20px)",
              transition:
                "opacity 300ms ease-out, backdrop-filter 300ms ease-out",
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
  transition: opacity 5000ms ease-in, backdrop-filter 300ms ease-in;
`;

export default Backdrop;
