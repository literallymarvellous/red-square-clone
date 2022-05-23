import Image from "next/image";
import { FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi";
import styled from "styled-components";
import { VisuallyHidden } from "../VisuallyHidden";
import IgIcon from "../../public/icons/IG.svg";
import LiIcon from "../../public/icons/LI.svg";
import TwIcon from "../../public/icons/TW.svg";
import NugsIcon from "../../public/icons/Nugs.svg";
import PageLink from "../PageLink/PageLink";
import flipImg from "../../public/images/flipboard.jpg";
import { QUERIES } from "../../constants";
import { usePageContext } from "../../hooks/pageContext";
import Email from "../Email/Email";
import { motion } from "framer-motion";

type FooterProps = {
  pageTitle: string;
};

const Footer = ({ pageTitle }: FooterProps) => {
  const context = usePageContext();
  const toggleModal = context.toggleModal;

  return (
    <footer>
      <Wrapper>
        <MainFooter>
          <Email />
          <ContactWrapper
            as={motion.div}
            initial={{ opacity: 0, y: "20%" }}
            whileInView={{
              opacity: 1,
              y: "0%",
              transition: {
                ease: [0.25, 0.1, 0.25, 1],
                delay: 0.3,
              },
            }}
          >
            <SocialsWrapper>
              <NugsModal onClick={toggleModal}>
                <Image
                  src={NugsIcon}
                  width={70}
                  height={70}
                  layout="responsive"
                  alt="nugs logo"
                />
              </NugsModal>
              <Icons>
                <IconWrapper>
                  <VisuallyHidden>Instagram</VisuallyHidden>
                  <Image
                    src={IgIcon}
                    width={30}
                    height={30}
                    layout="responsive"
                    alt="instagram icon"
                  />
                </IconWrapper>
                <IconWrapper>
                  <VisuallyHidden>Twitter</VisuallyHidden>
                  <Image
                    src={TwIcon}
                    width={30}
                    height={30}
                    layout="responsive"
                    alt="Twitter icon"
                  />
                </IconWrapper>
                <IconWrapper>
                  <VisuallyHidden>Linkendin</VisuallyHidden>
                  <Image
                    src={LiIcon}
                    width={30}
                    height={30}
                    layout="responsive"
                    alt="Linkedin icon"
                  />
                </IconWrapper>
              </Icons>
            </SocialsWrapper>
            <LocationWrapper>
              <div>Mobile, AL</div>
              <div>Chicago, IL</div>
              <div>Tulsa, Ok</div>
            </LocationWrapper>
          </ContactWrapper>
        </MainFooter>

        <SubFooter
          style={
            pageTitle === "Red Square"
              ? { display: "none" }
              : { display: "flex" }
          }
        >
          <SubFooterImageWrapper>
            <Image
              className="numsImg"
              src={flipImg}
              alt="flip image"
              layout="responsive"
            />
          </SubFooterImageWrapper>
          <SubFooterMain>
            <div>All projects</div>
            <PageLink pageTitle={pageTitle} />
          </SubFooterMain>
        </SubFooter>
      </Wrapper>
    </footer>
  );
};

const Wrapper = styled.div`
  padding-inline: var(--mobile-padding-inline);

  @media ${QUERIES.phoneAndBigger} {
    padding-inline: var(--tablet-padding-inline);
  }

  @media ${QUERIES.tabletAndBigger} {
    padding-inline: calc(var(--laptop-padding-inline) * 1.6);
  }

  @media ${QUERIES.laptopAndBigger} {
    padding-top: calc(var(--tablet-padding-block) * 0.1);
    padding-inline: calc(var(--desktop-padding-inline) * 1.2);
  }

  @media ${QUERIES.desktop} {
    padding-top: var(--desktop-padding-block);
    padding-inline: calc(var(--desktop-padding-inline) * 1.55);
  }
`;

const MainFooter = styled.div`
  padding-top: clamp(2rem, 8vw, 7rem);
  padding-bottom: clamp(2rem, 14vw, 9rem);

  @media ${QUERIES.tabletAndBigger} {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media ${QUERIES.desktop} {
    padding-top: clamp(2rem, 3vw, 5rem);
  }
`;

const ContactWrapper = styled.div`
  padding-top: 4px;
`;

const SocialsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  padding-block: 24px;

  @media ${QUERIES.tabletAndBigger} {
    padding-block: 8px;
    justify-content: flex-end;
  }
`;

const NugsModal = styled.div`
  position: relative;
  width: 70px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 28px;
  cursor: pointer;

  &:hover {
    transition: filter 250ms, color 250ms;

    img {
      filter: hue-rotate(60deg) saturate(16%) brightness(66%);
    }

    &::before {
      background: hsl(34, 16%, 66%);
    }
  }

  ::before {
    content: "+";
    background: var(--color-white);
    position: absolute;
    left: -26px;
    bottom: 4px;
    width: 22px;
    height: 22px;
    display: grid;
    place-content: center;
    border-radius: 50%;
    color: black;
  }
`;

const Icons = styled.div`
  display: flex;
  padding-top: 6px;
  align-items: flex-end;
  gap: 28px;
`;

const IconWrapper = styled.a`
  cursor: pointer;
  transition: transform 250ms, filter 250ms;

  &:hover {
    transform: scale(0.99);
    filter: brightness(0.5);
    transition: transform 250ms, filter 250ms;
  }
`;

const LocationWrapper = styled.div`
  display: flex;
  gap: 32px;
  color: var(--color-gray);
  font-size: 1.2rem;

  div {
    line-height: 1.4;
  }
`;

const SubFooter = styled.div`
  margin-inline: calc(var(--mobile-padding-inline) * -1);
  display: flex;
  justify-content: center;
  align-items: center;
  padding-block: 44px;
  position: relative;
  overflow: hidden;

  @media ${QUERIES.phoneAndBigger} {
    margin-inline: 0;
    padding-block: 12px;
  }

  @media ${QUERIES.tabletAndBigger} {
    margin-inline: calc(var(--laptop-padding-inline) * -1.1);
  }
`;

const SubFooterImageWrapper = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: block;
  filter: blur(10px);
`;

const SubFooterMain = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  font-family: var(--font-poppins);

  div:first-of-type {
    display: none;
    color: var(--color-white);
    position: relative;
  }

  @media ${QUERIES.phoneAndBigger} {
    justify-content: space-between;
    padding-inline: 50px;

    div:first-of-type {
      display: block;
      font-size: 1.2rem;
      font-weight: 500;
    }
  }

  @media ${QUERIES.tabletAndBigger} {
    padding-inline: 85px;
  }
`;

export default Footer;
