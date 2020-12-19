import React from "react";
import App, { AppInitialProps } from "next/app";
import { wrapper } from "../redux/Reducers";

class MyApp extends App<AppInitialProps> {
	public render() {
		const { Component, pageProps } = this.props;

		return <Component {...pageProps} />;
	}
}

export default wrapper.withRedux(MyApp);
