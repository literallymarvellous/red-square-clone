import { createGlobalStyle } from "styled-components";
import { COLORS } from "../../constants";

export const GlobalStyles = createGlobalStyle`

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
  display: block !important;
}

body.modal-open {
  height: 100vh;
  overflow-y: hidden;
}

.backdrop {
  z-index: 5;
}

.trans div {
  transform: "";
}
`;
