import styled from "styled-components";
import Image from "next/image";

type VideoReelImageProps = {
  image: string;
};

const VideoReelImage = ({ image }: VideoReelImageProps) => {
  return (
    <ImageWrapper className="img">
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
  display: none;
  position: absolute;
  inset: 0;

  img {
    border-radius: 4px;
  }
`;

export default VideoReelImage;
