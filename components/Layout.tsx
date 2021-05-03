import React, { ReactNode, useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import Router from "next/router";
import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";
import "bulma/css/bulma.min.css";
import Sidebar from "./Sidebar";
import Menu from "./Menu";
import Main from "./Main";
import { showLoading, hideLoading } from "react-redux-loading-bar";

type Props = {
	children?: ReactNode;
	title?: string;
	menu?: {
		[key: string]: any;
	};
};

const Layout = ({ children, title = "HackintoshPro", menu }: Props) => {
	const dispatch = useDispatch();

	const onLoad = () => dispatch(showLoading());
	const onDone = () => dispatch(hideLoading());

	useEffect(() => {
		Router.events.on("routeChangeStart", onLoad);
		Router.events.on("routeChangeComplete", onDone);
		Router.events.on("routeChangeError", onDone);

		return () => {
			Router.events.off("routeChangeStart", onLoad);
			Router.events.off("routeChangeComplete", onDone);
			Router.events.off("routeChangeError", onDone);
		};
	});

	return (
		<div>
			<Head>
				<title>{title}</title>
				<meta charSet="utf-8" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<Header menu={menu.primary} />
			<div className="main">
				<div className="columns">
					<Sidebar hidden={true}>
						<Menu menu={menu.primary} />
					</Sidebar>
					<Main>{children}</Main>
					<Sidebar />
				</div>
			</div>

			<Footer></Footer>
		</div>
	);
};

export default connect((state: any) => ({
	menu: state.menu,
}))(Layout);
