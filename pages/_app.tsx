import React from "react";
import App, { AppInitialProps } from "next/app";
import { ThemeProvider } from "styled-components";
import Global from "../global";
import { wrapper } from "../redux/Reducers";
import { dark } from "../theme";

class MyApp extends App<AppInitialProps> {
	public render() {
		const { Component, pageProps } = this.props;
		// const isDark = window && window.matchMedia("(prefers-color-scheme: dark)");

		return (
			<ThemeProvider theme={dark}>
				<Global />
				<Component {...pageProps} />
			</ThemeProvider>
		);
	}
}

export default wrapper.withRedux(MyApp);
