import axios from "axios";
import Header from "components/Header";
import "../styles/globals.css";
import { ThemeProvider } from "@emotion/react";
import GlobalStyles from "components/GlobalStyles/GlobalStyles";
import theme from "../theme/theme";

function MyApp({ Component, pageProps, navigation }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header navigation={navigation} isDark={false} />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

MyApp.getInitialProps = async () => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const res = await axios.get(`${API_URL}/navigations`);
  const navigation = res.data.data;

  return { navigation };
};

export default MyApp;
