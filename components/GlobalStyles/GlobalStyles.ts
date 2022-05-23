import { createGlobalStyle } from "styled-components";
import { COLORS } from "../../constants";

export const GlobalStyles = createGlobalStyle`
  /*
  1. Use a more-intuitive box-sizing model.
*/
*, *::before, *::after {
  box-sizing: border-box;
}
/*
  2. Remove default margin
*/
* {
  margin: 0;
}
/*
  3. Allow percentage-based heights in the application
*/
html, body {
  height: 100%;
  background-color: var(--color-black);
  color: var(--color-white);
}
/*
  Typographic tweaks!
  4. Add accessible line-height
  5. Improve text rendering
*/
body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}
/*
  6. Improve media defaults
*/
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}
/*
  7. Remove built-in form typography styles
*/
input, button, textarea, select {
  font: inherit;
}
/*
  8. Avoid text overflows
*/
p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}
/*
  9. Create a root stacking context
*/
#root, #__next {
  isolation: isolate;
}

html {
  /* Colors */
  --color-white: hsl(${COLORS.white});
  --color-black: hsl(${COLORS.black});
  --color-red: hsl(${COLORS.red});
  --color-gray: hsl(${COLORS.gray});

  /* Fonts */
  --font-poppins: 'Poppins', sans-serif;
  --font-volkhov: 'Volkhov', serif;

  /* Container padding */
  --mobile-padding-block: 32px;
  --mobile-padding-inline: 24px;
  --tablet-padding-block: 72px;
  --tablet-padding-inline: 48px;
  --laptop-padding-block: 90px;
  --laptop-padding-inline: 80px;
  --desktop-padding-block: 90px;
  --desktop-padding-inline: 136px;
}

.display {
  display: block;
}

body.modal-open {
  height: 100vh;
  overflow-y: hidden;
}

.backdrop {
  z-index: 3;
}

.trans div {
  transform: "";
}
`;
