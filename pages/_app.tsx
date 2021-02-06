import React from "react";
import App, { AppInitialProps } from "next/app";
import ThemeProvider from "../components/ThemeProvider";
import Global from "../global";
import { wrapper } from "../redux/Reducers";

class MyApp extends App<AppInitialProps, any, { dark: boolean }> {
	public render() {
		const { Component, pageProps } = this.props;
		return (
			<ThemeProvider>
				<Global />
				<Component {...pageProps} />
			</ThemeProvider>
		);
	}
}

export default wrapper.withRedux(MyApp);
