import { Dialog } from "@headlessui/react";
import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { QUERIES } from "../../constants";
import { usePageContext } from "../../hooks/pageContext";
import NugsIcon from "../../public/icons/Nugs.svg";

type NugsModalProps = {
  toggleModal: VoidFunction;
};

const NugsModal = ({ toggleModal }: NugsModalProps) => {
  const context = usePageContext();
  const modal = context.modal;

  // Close modal on "Escape"
  React.useEffect(() => {
    function handleKeydown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        toggleModal();
      }
    }

    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  });

  return (
    <ModalWrapper style={modal ? { display: "grid" } : {}}>
      <ModalBackdrop onClick={toggleModal} />
      <ModalContent>
        <ContactWrapper>
          <div>
            <ModalTitle>
              <Image src={NugsIcon} alt="nuhs logo" />
            </ModalTitle>
            <ModalInput>
              <Input id="email" type="text" placeholder="What's your email?" />
            </ModalInput>
          </div>
          <ParagraphWrapper>
            <Paragraph>Hey. We kinda hate getting emails too 🙄.</Paragraph>
            <Paragraph>
              That&#39;s why we promise to only send them when we have some
              tasty nuggets of information for you.
            </Paragraph>
            <Paragraph>
              In your inbox for a good time, not a long time.
            </Paragraph>
          </ParagraphWrapper>
        </ContactWrapper>
        <Legal>
          <a href="">Nevermind</a>
          <a href="">Privacy Policy</a>
        </Legal>
      </ModalContent>
    </ModalWrapper>
  );
};

const ModalWrapper = styled.div.attrs({
  role: "dialog",
})`
  --color-bg: hsl(34, 16%, 66%);
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  overflow: hidden;
  display: none;
  place-items: center;
`;
const ModalBackdrop = styled.div`
  position: absolute;
  height: 100vh;
  width: 100%;
  inset: 0;
`;

const ModalContent = styled.div`
  --height-increase: 8vh;
  --width-diff: 100px;
  --min-height: 500px;
  position: absolute;
  bottom: 0;
  margin: auto;
  height: calc(var(--min-height) + var(--height-increase));
  width: 100%;
  min-height: var(--min-height);
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  background: var(--color-bg);
  padding: 36px 40px 28px;
  pointer-events: auto;
  display: grid;
  grid-template-rows: 6fr 1fr;
  color: hsl(0, 0%, 100%, 0.85);

  @media ${QUERIES.phoneAndBigger} {
    border-top-left-radius: 60px;
    border-top-right-radius: 60px;
    --min-height: 570px;
    width: calc(100% - var(--width-diff));
    padding: 64px 64px 57px;
  }

  @media ${QUERIES.tabletAndBigger} {
    --min-height: 420px;
    --height-increse: 5vh;
    padding: 64px 72px 57px 80px;
    grid-template-rows: 3fr 1fr;
  }

  @media ${QUERIES.laptopAndBigger} {
    --min-height: 420px;
    --width-diff: 110px;
    padding: 64px 72px 57px 82px;
  }

  @media ${QUERIES.desktop} {
    --width-diff: 220px;
    padding: 64px 72px 57px 82px;
  }
`;

const ContactWrapper = styled.div`
  @media ${QUERIES.tabletAndBigger} {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

const ModalTitle = styled.h1`
  width: 4em;
  line-height: 1.4;
  padding: 0;

  @media ${QUERIES.phoneAndBigger} {
    width: 8em;
  }
`;

const ModalInput = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding-top: 16px;
  padding-bottom: 20px;
  max-width: 450px;

  ::after {
    content: "+";
    background: hsl(34, 16%, 72%);
    position: absolute;
    left: 78%;
    border-radius: 50%;
    width: 64px;
    height: 64px;
    display: grid;
    place-items: center;
    font-size: 2.5rem;
    font-family: var(--font-poppins);
    font-weight: 500;
    color: hsl(34, 16%, 50%);
    pointer-events: none;
  }
`;

const Input = styled.input`
  width: 75%;
  padding: 1.3rem 1rem;
  border-radius: 8px;
  border: none;
  background-color: hsl(34, 16%, 72%);
  font-family: var(--font-poppins);

  :focus {
    outline: none;
    background: hsl(34, 16%, 15%);
    color: var(--color-white);
  }

  &::placeholder {
    font-weight: 500;
    color: var(--color-white);
  }
`;

const ParagraphWrapper = styled.div`
  padding-bottom: 16px;

  @media ${QUERIES.phoneAndBigger} {
    padding-bottom: 40px;
  }

  @media ${QUERIES.tabletAndBigger} {
    padding-bottom: 20px;
  }
`;

const Paragraph = styled.p`
  --padding: 8px;
  padding-block: var(--padding);
  font-family: var(--font-poppins);
  font-size: 1.1rem;
  font-weight: 500;

  @media ${QUERIES.phoneAndBigger} {
    --padding: 10px;
    font-size: 1.2rem;
  }

  @media ${QUERIES.tabletAndBigger} {
    --padding: calc(24px + 0.01vw);
    padding-top: 0;
    font-size: calc(1.1rem + 0.01vw);
  }

  @media ${QUERIES.laptopAndBigger} {
    --padding: calc(24px + 0.01vw);
    font-size: calc(1.1rem + 0.11vw);
  }

  @media ${QUERIES.desktop} {
    --padding: calc(22px + 0.01vw);
    font-size: calc(1.3rem + 0.05vw);
  }
`;

const Legal = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  border-top: 1px solid hsl(0, 0%, 90%, 0.6);

  a {
    font-size: 1.3rem;
    font-weight: 500;
    color: hsl(0, 0%, 100%, 0.6);
    text-decoration: none;
    border-bottom: 2px solid hsl(0, 0%, 100%, 0.6);
    line-height: 1.15;
  }
`;

export default NugsModal;
