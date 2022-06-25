import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import VideoReel from "../components/VIdeoReel/VideoReel";
import { QUERIES } from "../constants";
import fs from "fs/promises";
import Backdrop from "../components/Backdrop/Backdrop";
import NugsModal from "../components/NugsModal/NugsModal";
import { usePageContext } from "../hooks/pageContext";
import { motion } from "framer-motion";

type HomeProps = {
  title: string;
  images: string[];
};

const Home: NextPage<HomeProps> = ({ title, images }) => {
  const context = usePageContext();
  const toggleModal = context.toggleModal;

  const heading = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.25,
        delay: 0.8,
      },
    },
    hidden: {
      opacity: 0,
    },
  };

  const span = {
    visible: {
      opacity: 1,
      transition: {
        ease: "easeInOut",
      },
    },
    hidden: { opacity: 0 },
  };

  const list = {
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
    hidden: {
      opacity: 0,
    },
  };

  const item = {
    visible: {
      opacity: 1,
      x: "0%",
      transition: {
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
    hidden: { opacity: 0, x: "-10%" },
  };

  return (
    <PageWrapper>
      <Head>
        <title>{title === "Home" ? "Red Square Agency Clone" : null}</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <Header pageTitle={title == "Home" ? "Work" : "Red Square"} />
      <main>
        <Wrapper>
          <motion.div
          // initial={{ y: 125 }}
          // animate={{ y: 0 }}
          // transition={{
          //   delay: 2.5,
          //   ease: [0.25, 0.1, 0.25, 1],
          //   duration: 1.5,
          // }}
          >
            <Heading
              as={motion.h1}
              initial="hidden"
              animate="visible"
              variants={heading}
            >
              <motion.span variants={span}>The</motion.span>{" "}
              <motion.span variants={span}>agency</motion.span>{" "}
              <motion.span variants={span}>for</motion.span> <br />{" "}
              <motion.span variants={span}>what</motion.span>{" "}
              <motion.span variants={span}>comes</motion.span>{" "}
              <motion.span variants={span}>next.</motion.span>
            </Heading>
          </motion.div>

          <ReelSection>
            <VideoReelWrapper
              as={motion.div}
              initial={{ opacity: 0, y: 150 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                ease: [0.25, 0.1, 0.25, 1],
                duration: 1.5,
                delay: 2.5,
              }}
            >
              <VideoReel images={images} />
            </VideoReelWrapper>
          </ReelSection>

          <section>
            <Paragraph
              as={motion.p}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                ease: "easeOut",
              }}
            >
              We deal in ideas, design and media that are category defying. When
              the world Millis, you&#39;ve got to Vanilli.
            </Paragraph>

            <SecondParagraph
              as={motion.p}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                ease: "easeOut",
              }}
            >
              Red Square believes in rigorous development of brand strategy and
              whip-smart execution. We make all sorts of things. Things that
              move markets, compel audiences and sell product. We help great
              brands create what comes next.
            </SecondParagraph>
          </section>

          <Line
            as={motion.div}
            initial={{ width: "0%" }}
            whileInView={{ width: "100%" }}
            transition={{
              ease: "easeOut",
              delay: 0.3,
            }}
          />
          <ClientSection>
            <ListHeading
              as={motion.div}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
            >
              Select Clients
            </ListHeading>
            <ListWrapper>
              <List
                as={motion.ul}
                initial="hidden"
                whileInView="visible"
                variants={list}
              >
                <motion.li variants={item}>Cherokee Casinos</motion.li>
                <motion.li variants={item}>Flipboard</motion.li>
                <motion.li variants={item}>Foxwoods</motion.li>
                <motion.li variants={item}>Glanbia Nutritionals</motion.li>
                <motion.li variants={item}>Google</motion.li>
                <motion.li variants={item}>Hard Rock</motion.li>
                <motion.li variants={item}>Hibbett Sports</motion.li>
                <motion.li variants={item}>Hilton Worldwide</motion.li>
                <motion.li variants={item}>Jack Daniel&#39;s</motion.li>
              </List>
              <List
                as={motion.ul}
                initial="hidden"
                whileInView="visible"
                variants={list}
              >
                <motion.li variants={item}>Nescafé</motion.li>
                <motion.li variants={item}>New York Pride</motion.li>
                <motion.li variants={item}>Patreon</motion.li>
                <motion.li variants={item}>Rivers Casino</motion.li>
                <motion.li variants={item}>Snickers</motion.li>
                <motion.li variants={item}>Southern Comfort</motion.li>
                <motion.li variants={item}>The University of Alabama</motion.li>
                <motion.li variants={item}>Twix</motion.li>
                <motion.li variants={item}>Wind Creek Hospitaty</motion.li>
              </List>
            </ListWrapper>
          </ClientSection>
          <Line
            as={motion.div}
            initial={{ width: "0%" }}
            whileInView={{ width: "100%" }}
            transition={{
              ease: "easeOut",
              delay: 0.3,
            }}
          />
        </Wrapper>
      </main>
      <Footer pageTitle={title == "Home" ? "Work" : "Red Square"} />

      <NugsModal toggleModal={toggleModal} />

      <Backdrop />
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

const Wrapper = styled.div`
  padding-inline: var(--mobile-padding-inline);
  color: var(--color-white);

  @media ${QUERIES.phoneAndBigger} {
    padding-inline: var(--tablet-padding-inline);
  }

  @media ${QUERIES.tabletAndBigger} {
    padding-inline: calc(var(--laptop-padding-inline) * 1.6);
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
  height: clamp(190px, 53vw, 700px);
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
  height: 100%;
  /* height: clamp(190px, 53vw, 700px); */
  overflow: hidden;
  transition: transform 200ms ease-in;
  will-change: transform;

  &:hover {
    transform: scale(0.98);
    transition: transform 200ms ease-out;
    cursor: pointer;
  }
`;

const Paragraph = styled.p`
  font-family: var(--font-poppins);
  font-size: 1.7rem;
  line-height: 1.5;
  padding-block: 36px;
  font-weight: 600;

  @media ${QUERIES.phoneAndBigger} {
    font-size: 2.8rem;
    line-height: 1.4;
  }
`;

const SecondParagraph = styled.p`
  padding-bottom: 36px;
  font-family: var(--font-poppins);
  font-size: 1.3rem;
  font-weight: 500;
  line-height: 1.5;

  @media ${QUERIES.phoneAndBigger} {
    padding-bottom: calc(48px + 2vw);
    font-size: 1.5rem;
    line-height: 1.7;
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
    display: grid;
    grid-template-columns: 2fr 3fr;
    padding-top: calc(56px + 2.5vw);
    padding-bottom: calc(72px + 3.6vw);
  }
`;

const ListWrapper = styled.ul`
  padding-inline: 0;

  @media ${QUERIES.phoneAndBigger} {
    display: flex;
    gap: 180px;
  }

  @media ${QUERIES.tabletAndBigger} {
    justify-content: space-between;
    gap: 32px;
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
      font-size: calc(1.1rem + 0.1vw);
      line-height: calc(2 * 1.6vw);
    }
  }

  @media ${QUERIES.laptopAndBigger} {
    font-size: calc(1.2rem + 0.25vw);
  }
`;

export const getStaticProps: GetStaticProps = async () => {
  const imagesPath = "./public/images";
  let images = await fs.readdir(imagesPath);
  return {
    props: {
      images,
    },
  };
};

export default Home;
