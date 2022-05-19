export const COLORS = {
  red: "351deg 87% 50%",
  black: "0deg 0% 7%",
  gray: "0deg 0% 52%",
  white: "0deg 0% 100%",
};

export const BREAKPOINTS = {
  phone: 600,
  tablet: 1024,
  laptop: 1200,
  desktop: 1440,
};

export const QUERIES = {
  phoneAndSmaller: `(max-width: ${BREAKPOINTS.phone / 16}rem)`,
  phoneAndBigger: `(min-width: ${BREAKPOINTS.phone / 16}rem)`,
  tabletAndSmaller: `(max-width: ${BREAKPOINTS.tablet / 16}rem)`,
  phoneAndTablet: `(min-width: ${BREAKPOINTS.phone / 16}rem) and (max-width: ${
    BREAKPOINTS.tablet / 16
  }rem)`,
  tabletAndBigger: `(min-width: ${BREAKPOINTS.tablet / 16}rem)`,
  tabletAndLaptop: `(min-width: ${
    BREAKPOINTS.tablet / 16
  }rem) and (max-width: ${BREAKPOINTS.laptop / 16}rem)`,
  laptopAndSmaller: `(max-width: ${BREAKPOINTS.laptop / 16}rem)`,
  laptopAndBigger: `(min-width: ${BREAKPOINTS.laptop / 16}rem)`,
  desktop: `(min-width: ${BREAKPOINTS.desktop / 16}rem)`,
};

// font-family: 'Poppins', sans-serif;
// font-family: 'Volkhov', serif;
