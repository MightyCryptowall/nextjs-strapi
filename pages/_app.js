import Header from "components/Header";
import "../styles/globals.css";
import { ThemeProvider } from "@emotion/react";
import GlobalStyles from "components/GlobalStyles/GlobalStyles";
import theme from "../theme/theme";



function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header isDark={false} />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
