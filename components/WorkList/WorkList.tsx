import React from "react";
import styled from "styled-components";
import { QUERIES } from "../../constants";
import WorkItem from "../WorkItem/WorkItem";

type WorkListProps = {
  images: string[];
  logos: string[];
};

const WorkList = ({ images, logos }: WorkListProps) => {
  return (
    <Wrapper>
      {images.map((image, i) => (
        <WorkListWrapper key={image}>
          <WorkItem image={image} logo={logos[i]} />
        </WorkListWrapper>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding-bottom: 32px;
  isolation: isolate;
`;

const WorkListWrapper = styled.div`
  padding-inline: var(--mobile-padding-inline);
  margin: 0 auto;
  padding-block: 8px;

  @media ${QUERIES.phoneAndBigger} {
    padding-inline: var(--tablet-padding-inline);
  }

  @media ${QUERIES.tabletAndBigger} {
    padding-inline: var(--laptop-padding-inline);
  }

  @media ${QUERIES.desktop} {
    padding-inline: var(--desktop-padding-inline);
  }
`;

export default WorkList;
