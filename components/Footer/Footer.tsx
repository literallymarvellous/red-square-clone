import Image from "next/image";
import { FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi";
import styled from "styled-components";
import { VisuallyHidden } from "../VisuallyHidden";
import IgIcon from "../../public/icons/IG.svg";
import LiIcon from "../../public/icons/LI.svg";
import TwIcon from "../../public/icons/TW.svg";
import NugsIcon from "../../public/icons/Nugs.svg";
import PageLink from "../PageLink/PageLink";
import flipImg from "../../public/images/flip-thumb.jpg";

type FooterProps = {
  pageTitle: string;
};

const Footer = ({ pageTitle }: FooterProps) => {
  console.log(pageTitle);
  return (
    <footer>
      <Wrapper>
        <MainFooter>
          <EmailWrapper>
            <div>Let&#39;s talk.</div>
            <div>hi@rsq.com</div>
          </EmailWrapper>
          <div>
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
          </div>
        </MainFooter>

        <SubFooter
          style={
            pageTitle === "Red Square"
              ? { display: "none" }
              : { display: "flex" }
          }
        >
          <SubFooterImageWrapper>
            <Image src={flipImg} alt="flip image" />
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
`;

const MainFooter = styled.div`
  padding-top: clamp(2rem, 11vw, 4rem);
  padding-bottom: 32px;
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
`;

const SocialsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  padding: 24px 0 24px 0;
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
  padding-block: 50px;
  position: relative;
  overflow: hidden;
`;

const SubFooterImageWrapper = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  filter: blur(10px);
`;

const SubFooterMain = styled.div`
  display: flex;

  div:first-of-type {
    display: none;
  }
`;

export default Footer;
