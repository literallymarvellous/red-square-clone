import React from "react";
import styled from "styled-components";
import Image from "next/image";

type WorkItemProps = {
  image: string;
};

const WorkItem = ({ image }: WorkItemProps) => {
  console.log("/../../public/images/" + image);
  return (
    <ImageWrapper>
      <img src="../../public/images/flip-thumb.jpg" alt={image} />
    </ImageWrapper>
  );
};

const ImageWrapper = styled.div`
  width: 80%;
`;

export default WorkItem;
