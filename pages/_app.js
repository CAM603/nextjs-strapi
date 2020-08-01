import Header from "components/Header";

import { ThemeProvider } from "emotion-theming";
import GlobalStyles from "components/GlobalStyles/GlobalStyles";
// import "../styles/globals.css";
import theme from "../theme/theme";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<ThemeProvider theme={theme}>
				<GlobalStyles />
				<Header isDark />
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	);
}

export default MyApp;
