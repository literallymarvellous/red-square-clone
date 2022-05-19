import Link from "next/link";
import styled from "styled-components";
import { QUERIES } from "../../constants";

type PageLinkProps = {
  pageTitle: string;
};

const PageLink = ({ pageTitle }: PageLinkProps) => {
  const page = pageTitle === "Work" ? "work" : "";

  return (
    <Link href={`/${page}`}>
      <Wrapper>{pageTitle}</Wrapper>
    </Link>
  );
};

const Wrapper = styled.a`
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

  &::after {
    content: ">";
    position: absolute;
    font-size: 1.4rem;
    font-weight: 300;
    color: var(--color-gray);
    right: calc(var(--chevron-gap) * -1);
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
