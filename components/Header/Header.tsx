import styled, { keyframes } from "styled-components";
import { QUERIES } from "../../constants";
import PageLink from "../PageLink/PageLink";
import { VisuallyHidden } from "../VisuallyHidden";

type HeaderProps = {
  pageTitle: string;
};

const Header = ({ pageTitle }: HeaderProps) => {
  return (
    <header>
      <Wrapper>
        <SquareWrapper>
          <Shape>
            <VisuallyHidden>Red Square</VisuallyHidden>
          </Shape>
          {/* <span>Red Square</span> */}
        </SquareWrapper>
        <PageLink pageTitle={pageTitle} />
      </Wrapper>
    </header>
  );
};

const fadeIn = keyframes`
  0% {
    background: transparent;
  }
  to {
    background: var(--color-red);
  }
`;

const fadeIn2 = keyframes`
  0% {
    opacity: 0;
  }
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const fadeIn3 = keyframes`
  0% {
    opacity: 0;
  }
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const Wrapper = styled.div`
  padding: var(--mobile-padding-block) var(--mobile-padding-inline);
  color: var(--color-white);
  font-family: var(--font-poppins);
  display: flex;
  justify-content: space-between;
  isolation: isolate;

  @media ${QUERIES.phoneAndBigger} {
    padding: var(--tablet-padding-block) var(--tablet-padding-inline);
  }

  @media ${QUERIES.tabletAndBigger} {
    padding-top: var(--laptop-padding-block);
    padding-inline: calc(var(--laptop-padding-inline) * 1.8);
  }

  @media ${QUERIES.laptopAndBigger} {
    padding-top: calc(var(--desktop-padding-block) * 1.1);
    padding-bottom: calc(var(--desktop-padding-block) * 0.8);
    padding-inline: calc(var(--desktop-padding-inline) * 1.15);
  }

  @media ${QUERIES.desktop} {
    padding-top: var(--desktop-padding-block);
    padding-bottom: calc(var(--desktop-padding-block) * 1.3);
    padding-inline: calc(var(--desktop-padding-inline) * 1.55);
  }
`;

const SquareWrapper = styled.a`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const Shape = styled.span`
  --shape-width: 30px;
  position: relative;
  width: var(--shape-width);
  height: var(--shape-width);
  animation: ${fadeIn} 300ms ease;
  animation-delay: 800ms;
  animation-fill-mode: both;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  will-change: background;

  &::before {
    content: "";
    position: absolute;
    width: calc(var(--shape-width) + 2px);
    height: calc(var(--shape-width) + 2px);
    border-radius: 50%;
    background-color: blue;
    animation: ${fadeIn2} 400ms ease;
    animation-fill-mode: both;
    will-change: opacity;
  }

  &:after {
    content: "";
    position: absolute;
    width: var(--shape-width);
    height: var(--shape-width);
    background-image: linear-gradient(
        to bottom right,
        transparent 50%,
        yellow 0
      ),
      linear-gradient(to top right, yellow 50%, transparent 0);
    background-size: 50% 100%;
    background-repeat: no-repeat;
    background-position: left, right;
    animation: ${fadeIn3} 400ms ease-in-out;
    animation-delay: 400ms;
    animation-fill-mode: both;
    will-change: opacity;
  }
`;

export default Header;
