import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { QUERIES } from "../../constants";

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
          layout="responsive"
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
  will-change: transfrom filter;
  transition: filter 200ms ease-in, transform 250ms ease-in;

  ${Wrapper}:hover &, 
  ${Wrapper}:focus & {
    filter: brightness(40%);
    transform: scale(0.98);
    transition: filter 300ms ease-out, transform 250ms ease-out;
  }

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

  @media ${QUERIES.phoneAndBigger} {
    width: 180px;
    height: 180px;
  }
`;

export default WorkItem;
