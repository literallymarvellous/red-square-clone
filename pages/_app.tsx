import { GlobalStyles } from "../components/GlobalStyles";
import type { AppProps } from "next/app";
import { PageContextProvider } from "../hooks/pageContext";
import "../styles/global.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <PageContextProvider>
        <GlobalStyles />
        <Component {...pageProps} />
      </PageContextProvider>
    </>
  );
}

export default MyApp;
