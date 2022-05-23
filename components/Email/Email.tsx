import { motion } from "framer-motion";
import React, { useEffect } from "react";
import styled from "styled-components";
import { QUERIES } from "../../constants";
import { usePageContext } from "../../hooks/pageContext";

const Email = () => {
  const context = usePageContext();
  const setBackdrop = context.setBackdrop;
  const parentRef = React.useRef<HTMLDivElement>(null!);
  const childRef = React.useRef<HTMLDivElement>(null!);

  const mouseEnter = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.currentTarget.classList.add("backdrop");
    setBackdrop(true);
  };

  const mouseLeave = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.currentTarget.classList.remove("backdrop");
    setBackdrop(false);
  };

  useEffect(() => {
    let el: HTMLDivElement;
    const mouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { left, top, width, height, right, bottom } =
        childRef.current.getBoundingClientRect();
      let widthMidpoint = width / 2;
      let heightMidpoint = height / 2;
      let xmidpoint = left + widthMidpoint;
      let ymidpoint = top + heightMidpoint;
      let ydeg = (clientX - xmidpoint) / (right - xmidpoint);
      let xdeg = ((clientY - ymidpoint) / (bottom - ymidpoint)) * -1;

      childRef.current.style.transform = `rotate3d(${xdeg}, ${ydeg}, 0, 12deg)`;
    };

    const mouseLeave = () => {
      childRef.current.style.transform = ``;
    };

    if (parentRef.current) {
      el = parentRef.current;
      parentRef.current.addEventListener("mousemove", mouseMove);
      parentRef.current.addEventListener("mouseleave", mouseLeave);
    }
    return () => {
      el.removeEventListener("mousemove", mouseMove);
      el.removeEventListener("mouseleave", mouseLeave);
    };
  });

  return (
    <Wrapper
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
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      ref={parentRef}
    >
      <EmailWrapper ref={childRef}>
        <div>Let&#39;s talk.</div>
        <div>hi@rsq.com</div>
      </EmailWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  padding: 2px;
  perspective: 600px;
  width: fit-content;
  cursor: pointer;
`;

const EmailWrapper = styled.div`
  position: relative;
  margin-left: -2px;
  transform-style: preserve-3d;
  transition: transform 250ms ease-in;
  will-change: transform;

  ${Wrapper}:hover & {
    transition: transform 1ms ease;
  }

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

export default Email;
