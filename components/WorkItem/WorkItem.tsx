import React from "react";
import styled from "styled-components";
import Image from "next/image";
import white from "../../public/logos/Logo_Horiz_White.svg";

type WorkItemProps = {
  image: string;
};

const WorkItem = ({ image }: WorkItemProps) => {
  return (
    <ImageWrapper>
      <Image
        loader={() =>
          `https://raw.githubusercontent.com/literallymarvellous/red-square-clone/main/public/images/${image}`
        }
        src={image}
        alt={image}
        width={270}
        height={160}
        layout="responsive"
      />
    </ImageWrapper>
  );
};

const ImageWrapper = styled.div`
  width: 100%;
  display: block;

  img {
    border-radius: 4px;
  }
`;

export default WorkItem;
