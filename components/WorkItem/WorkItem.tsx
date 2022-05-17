import React from "react";
import styled from "styled-components";
import Image from "next/image";
import white from "../../public/logos/Logo_Horiz_White.svg";

type WorkItemProps = {
  image: string;
  logo: string;
};

const WorkItem = ({ image, logo }: WorkItemProps) => {
  return (
    <Wrapper>
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
      <LogoWrapper>
        <Image
          loader={() =>
            `https://raw.githubusercontent.com/literallymarvellous/red-square-clone/main/public/logos/${logo}`
          }
          src={logo}
          alt={logo}
          width={120}
          height={120}
        />
      </LogoWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
`;

const ImageWrapper = styled.div`
  width: 100%;
  display: block;

  img {
    border-radius: 4px;
  }
`;

const LogoWrapper = styled.div`
  width: 100%;
  display: block;
  position: absolute;
  inset: 0;
  width: 120px;
  height: 120px;
  margin: auto;
`;

export default WorkItem;
