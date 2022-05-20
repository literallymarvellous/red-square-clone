import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import VideoReel from "../components/VIdeoReel/VideoReel";
import { QUERIES } from "../constants";
import fs from "fs";
import { useState } from "react";
import { PageContextInterface, usePageContext } from "../hooks/pageContext";

type HomeProps = {
  title: string;
  images: string[];
};

const Home: NextPage<HomeProps> = ({ title, images }) => {
  // const [backdrop, setBackdrop] = useState(false);
  const context = usePageContext();
  const backdrop = context?.backdrop;

  return (
    <PageWrapper>
      <Head>
        <title>{title === "Home" ? "Red Square Agency Clone" : null}</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <Header pageTitle={title == "Home" ? "Work" : "Red Square"} />
      <main>
        <Wrapper>
          <Heading>
            The agency for <br /> what comes next.
          </Heading>

          <ReelSection>
            <VideoReelWrapper>
              <VideoReel images={images} />
            </VideoReelWrapper>
          </ReelSection>

          <section>
            <Paragraph>
              We deal in ideas, design and media that are category defying. When
              the world Millis, you&#39;ve got to Vanilli.
            </Paragraph>

            <SecondParagraph>
              Red Square believes in rigorous development of brand strategy and
              whip-smart execution. We make all sorts of things. Things that
              move markets, compel audiences and sell product. We help great
              brands create what comes next.
            </SecondParagraph>
          </section>

          <Line />
          <ClientSection>
            <ListHeading>Select Clients</ListHeading>
            <ListWrapper>
              <List>
                <li>Cherokee Casinos</li>
                <li>Flipboard</li>
                <li>Foxwoods</li>
                <li>Glanbia Nutritionals</li>
                <li>Google</li>
                <li>Hard Rock</li>
                <li>Hibbett Sports</li>
                <li>Hilton Worldwide</li>
                <li>Jack Daniel&#39;s</li>
              </List>
              <List>
                <li>Nescafé</li>
                <li>New York Pride</li>
                <li>Patreon</li>
                <li>Rivers Casino</li>
                <li>Snickers</li>
                <li>Southern Comfort</li>
                <li>The University of Alabama</li>
                <li>Twix</li>
                <li>Wind Creek Hospitality</li>
              </List>
            </ListWrapper>
          </ClientSection>
          <Line />
        </Wrapper>
      </main>
      <Footer pageTitle={title == "Home" ? "Work" : "Red Square"} />

      <BackDrop
        style={
          backdrop
            ? {
                opacity: "0.8",
                position: "absolute",
                backdropFilter: "blur(20px)",
                transition:
                  "opacity 300ms ease-out, backdrop-filter 300ms ease-out",
              }
            : {
                opacity: "0",
                position: "relative",
                transition: "opacity 5000ms",
              }
        }
      />
    </PageWrapper>
  );
};

Home.defaultProps = {
  title: "Home",
};

const PageWrapper = styled.div`
  height: 100%;
  position: relative;
`;

const BackDrop = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  background: var(--color-black);
  transition: opacity 5000ms ease-in, backdrop-filter 300ms ease-in;
`;

const Wrapper = styled.div`
  padding-inline: var(--mobile-padding-inline);
  color: var(--color-white);

  @media ${QUERIES.phoneAndBigger} {
    padding-inline: var(--tablet-padding-inline);
  }

  @media ${QUERIES.tabletAndBigger} {
    padding-inline: calc(var(--laptop-padding-inline) * 1.8);
  }

  @media ${QUERIES.laptopAndBigger} {
    padding-inline: calc(var(--desktop-padding-inline) * 1.15);
  }

  @media ${QUERIES.desktop} {
    padding-inline: calc(var(--desktop-padding-inline) * 1.55);
  }
`;

const Heading = styled.h1`
  padding-top: clamp(11rem, 46vw, 13.5rem);
  font-family: var(--font-volkhov);
  font-size: 2.3rem;
  font-weight: 700;
  line-height: 1.3;

  @media ${QUERIES.phoneAndBigger} {
    font-size: clamp(2.3rem, 7vw, 4.3rem);
    line-height: 1.2;
    padding-top: calc(13.5rem - 10vw);
    padding-bottom: clamp(1rem, 5vw, 6rem);
  }

  @media ${QUERIES.tabletAndBigger} {
    font-size: clamp(4.3rem, 7.2vw, 7rem);
    line-height: 1;
  }
`;

const ReelSection = styled.div`
  padding-top: clamp(2rem, 9vw, 4rem);
  padding-bottom: 28px;
  margin-inline: calc(var(--mobile-padding-inline) * -1);

  @media ${QUERIES.phoneAndBigger} {
    margin-inline: calc(var(--tablet-padding-inline) * -1);
  }

  @media ${QUERIES.tabletAndBigger} {
    margin-inline: calc(var(--laptop-padding-inline) * 1.35 * -1);
  }
`;

const VideoReelWrapper = styled.div`
  width: 100%;
  height: clamp(190px, 55vw, 700px);
  overflow: hidden;
  transition: transform 200ms ease-in;
  will-change: transform;

  &:hover {
    transform: scale(0.99);
    transition: transform 200ms ease-out;
  }
`;

const Paragraph = styled.p`
  font-family: var(--font-poppins);
  font-size: 1.7rem;
  line-height: 1.5;
  padding-block: 36px;
  font-weight: 600;
`;

const SecondParagraph = styled.p`
  padding-bottom: 36px;
  font-family: var(--font-poppins);
  font-size: 1.3rem;
  font-weight: 500;
  line-height: 1.5;

  @media ${QUERIES.phoneAndBigger} {
    padding-bottom: 48px;
  }
`;

const Line = styled.div`
  margin: 0;
  padding: 0;
  height: 0.1px;
  background-color: var(--color-gray);
  filter: opacity(0.5);
`;

const ClientSection = styled.section`
  padding: 56px 0 72px 0;

  @media ${QUERIES.tabletAndBigger} {
    display: flex;
    justify-content: space-between;
  }
`;

const ListWrapper = styled.ul`
  padding-inline: 0;

  @media ${QUERIES.phoneAndBigger} {
    display: flex;
    gap: 64px;
  }
`;

const ListHeading = styled.div`
  font-family: var(--font-poppins);
  color: var(--color-gray);
  font-size: 1.1rem;
  font-weight: 300;
  padding-bottom: 12px;
`;

const List = styled.ul`
  list-style: none;
  padding-inline: 0;

  li {
    font-family: var(--font-poppins);
    font-size: 1.3rem;
    line-height: 1.9;
  }

  @media ${QUERIES.tabletAndBigger} {
    li {
      font-size: 1rem;
    }
  }
`;

export const getStaticProps: GetStaticProps = async () => {
  const imagesPath = "./public/images";
  let images = fs.readdirSync(imagesPath);
  return {
    props: {
      images,
    },
  };
};

export default Home;
