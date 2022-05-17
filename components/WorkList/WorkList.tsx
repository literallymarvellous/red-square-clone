import React from "react";
import styled from "styled-components";
import WorkItem from "../WorkItem/WorkItem";

type WorkListProps = {
  images: string[];
  logos: string[];
};

const WorkList = ({ images, logos }: WorkListProps) => {
  console.log(images);
  console.log(logos);
  return (
    <div>
      {images.map((image, i) => (
        <Wrapper key={image}>
          <WorkItem image={image} logo={logos[i]} />
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
