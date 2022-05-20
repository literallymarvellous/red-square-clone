import React from "react";
import styled from "styled-components";
import { usePageContext } from "../../hooks/pageContext";

const NugsModal = () => {
  const context = usePageContext();
  const modal = context.modal;
  const setModal = context.setModal;

  return (
    <Wrapper
      style={modal ? { display: "block" } : {}}
      onClick={() => setModal(false)}
    >
      <ModalWrapper>
        <div>
          <div>
            <h1>Nugs</h1>
            <div>
              <div>
                <label htmlFor="email"></label>
                <input id="email" type="text" />
              </div>
            </div>
          </div>
          <div>
            <p>Hey. We kinda hate getting emails too</p>
            <p>
              That&#39;s why we promise to only send them when we have some
              tasty nuggets of information for you.
            </p>
            <p>In your inbox for a good time, not a long time.</p>
          </div>
        </div>
        <div>
          <a>Nevermind</a>
          <a>Privacy Policy</a>
        </div>
      </ModalWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  height: 100vh;
  width: 100%;
  top: 0;
  left: 0;
  overflow: hidden;
  pointer-events: all;

  /* background: gainsboro; */
  display: none;
`;

const ModalWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 90%;
  width: 100%;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  background: hsl(34, 16%, 66%);
  padding: 24px 40px;
  pointer-events: none;
`;

export default NugsModal;
