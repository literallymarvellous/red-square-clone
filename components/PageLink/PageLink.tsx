import styled from "styled-components";

type PageLinkProps = {
  pageTitle: string;
};

const PageLink = ({ pageTitle }: PageLinkProps) => {
  return <Wrapper>{pageTitle}</Wrapper>;
};

const Wrapper = styled.a`
  --chevron-gap: 24px;
  position: relative;
  margin-right: var(--chevron-gap);
  font-family: var(--font-poppins);
  font-size: 1.05rem;
  display: flex;
  align-items: center;
  justify-content: center;

  &::after {
    content: ">";
    position: absolute;
    font-size: 1.4rem;
    font-weight: 300;
    color: var(--color-gray);
    right: calc(var(--chevron-gap) * -1);
  }
`;

export default PageLink;
