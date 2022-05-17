import React from "react";
import styled from "styled-components";
import WorkItem from "../WorkItem/WorkItem";

type WorkListProps = {
  images: string[];
};

const WorkList = ({ images }: WorkListProps) => {
  return (
    <div>
      {images.map((image) => (
        <Wrapper key={image}>
          <WorkItem image={image} />
        </Wrapper>
      ))}
    </div>
  );
};

const Wrapper = styled.div`
  width: 85%;
  margin: 0 auto;
  padding-block: 8px;
`;

export default WorkList;
