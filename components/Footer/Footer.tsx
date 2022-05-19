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

type FooterProps = {
  pageTitle: string;
};

const Footer = ({ pageTitle }: FooterProps) => {
  return (
    <footer>
      <Wrapper>
        <MainFooter>
          <EmailWrapper>
            <div>Let&#39;s talk.</div>
            <div>hi@rsq.com</div>
          </EmailWrapper>
          <ContactWrapper>
            <SocialsWrapper>
              <NugsModal>
                <Image src={NugsIcon} alt="nugs logo" />
              </NugsModal>
              <Icons>
                <a>
                  <VisuallyHidden>Instagram</VisuallyHidden>
                  <Image src={IgIcon} alt="instagram icon" />
                </a>
                <a>
                  <VisuallyHidden>Twitter</VisuallyHidden>
                  <Image src={TwIcon} alt="instagram icon" />
                </a>
                <a>
                  <VisuallyHidden>Linkendin</VisuallyHidden>
                  <Image src={LiIcon} alt="instagram icon" />
                </a>
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
            <Image src={flipImg} alt="flip image" layout="responsive" />
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
    padding-inline: calc(var(--laptop-padding-inline) * 1.8);
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
  padding-top: clamp(2rem, 11vw, 3.4rem);
  padding-bottom: 36px;

  @media ${QUERIES.tabletAndBigger} {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  @media ${QUERIES.phoneAndBigger} {
    padding-bottom: 48px;
  }

  @media ${QUERIES.desktop} {
    padding-bottom: calc(var(--desktop-padding-block) * 1.3);
  }
`;

const EmailWrapper = styled.div`
  padding-bottom: 16px;

  div {
    font-family: var(--font-poppins);
    font-size: 1.9rem;
    font-weight: 700;
    line-height: 1.1;
  }

  div:last-of-type {
    color: var(--color-red);
  }

  @media ${QUERIES.phoneAndTablet} {
    div {
      font-size: 3.5rem;
    }
  }

  @media ${QUERIES.tabletAndLaptop} {
    padding-block: 2px;

    div {
      font-size: 2.2rem;
    }
  }

  @media ${QUERIES.laptopAndBigger} {
    div {
      font-size: 3.5rem;
    }
  }
`;

const ContactWrapper = styled.div``;

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
    margin-top: 130px;
    padding-block: 12px;
  }

  @media ${QUERIES.tabletAndBigger} {
    margin-inline: calc(var(--laptop-padding-inline) * -1.45);
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
    padding-inline: 108px;

    div:first-of-type {
      display: block;
      font-size: 1.2rem;
      font-weight: 500;
    }
  }
`;

export default Footer;
