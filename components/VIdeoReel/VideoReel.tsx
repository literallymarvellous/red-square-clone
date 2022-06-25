import React, { useState } from "react";
import styled from "styled-components";
import { useInterval } from "../../hooks/useInterval";
import VideoReelImage from "../VideoReelImage/VideoReelImage";

type VideoReelProps = {
  images: string[];
};

const VideoReel = ({ images }: VideoReelProps) => {
  const [count, setCount] = useState(1);

  useInterval(() => {
    const imgs = document.querySelectorAll(".img");
    const length = imgs.length;

    if (count - 1 === 0) {
      imgs[length - 1].classList.remove("display");
    }

    imgs[count - 2]?.classList.remove("display");
    imgs[count - 1].classList.add("display");
    setCount((prev) => (prev % length) + 1);
  }, 300);

  return (
    <>
      {images.map((image, i) => (
        <VideoReelWrapper key={image}>
          <VideoReelImage image={image} />
        </VideoReelWrapper>
      ))}
    </>
  );
};

const VideoReelWrapper = styled.div`
  position: relative;
`;

export default VideoReel;
