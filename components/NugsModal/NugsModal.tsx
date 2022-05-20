import React from "react";
import styled from "styled-components";

const NugsModal = () => {
  return (
    <Wrapper>
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
            That&#39;s why we promise to only send them when we have some tasty
            nuggets of information for you.
          </p>
          <p>In your inbox for a good time, not a long time.</p>
        </div>
      </div>
      <div>
        <a>Nevermind</a>
        <a>Privacy Policy</a>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: hsl(34, 16%, 66%);
`;

export default NugsModal;
