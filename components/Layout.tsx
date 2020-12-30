import React, { ReactNode } from "react";
import { connect } from "react-redux";
import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";
import "bulma/css/bulma.min.css";
import Sidebar from "./Sidebar";
import Menu from "./Menu";
import Main from "./Main";

type Props = {
	children?: ReactNode;
	title?: string;
	menu?: {
		[key: string]: any;
	};
};

const Layout = ({ children, title = "HackintoshPro", menu }: Props) => (
	<div>
		<Head>
			<title>{title}</title>
			<meta charSet="utf-8" />
			<meta name="viewport" content="initial-scale=1.0, width=device-width" />
		</Head>
		<Header />
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

export default connect((state: any) => ({
	menu: state.menu,
}))(Layout);
