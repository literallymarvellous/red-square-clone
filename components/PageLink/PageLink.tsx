import { motion } from "framer-motion";
import Link from "next/link";
import styled from "styled-components";
import { QUERIES } from "../../constants";
import { usePageContext } from "../../hooks/pageContext";

type PageLinkProps = {
  pageTitle: string;
};

const PageLink = ({ pageTitle }: PageLinkProps) => {
  const page = pageTitle === "Work" ? "work" : "";
  const context = usePageContext();

  const setBackdrop = context.setBackdrop;

  const mouseEnter = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.currentTarget.classList.add("backdrop");
    setBackdrop(true);
  };

  const mouseLeave = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.currentTarget.classList.remove("backdrop");
    setBackdrop(false);
  };

  return (
    <Wrapper
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      onClick={mouseLeave}
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8 }}
    >
      <Link href={`/${page}`}>
        <LinkWrapper>{pageTitle}</LinkWrapper>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding-left: 4px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LinkWrapper = styled.a`
  --chevron-gap: 24px;
  position: relative;
  margin-right: var(--chevron-gap);
  font-family: var(--font-poppins);
  font-size: clamp(1.05rem, 1.3vw, 1.4rem);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  cursor: pointer;
  transition: transform 350ms;

  &::after {
    content: ">";
    display: block;
    position: absolute;
    font-size: 1.4rem;
    font-weight: 300;
    color: var(--color-gray);
    right: calc(var(--chevron-gap) * -1);
    transition: transform 350ms cubic-bezier(0.47, 1.8, 0.41, 0.8);
  }

  ${Wrapper}:hover & {
    transform: translateX(4px);
    transition: transform 300ms;

    &::after {
      transform: translateX(4px);
      transition: transform 300ms;
    }
  }

  @media ${QUERIES.phoneAndBigger} {
    &::after {
      color: var(--color-white);
      font-size: 1.6rem;
      font-weight: 400;
    }
  }
`;

export default PageLink;
