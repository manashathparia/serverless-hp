import { useEffect } from "react";
import Layout from "../components/Layout";
export const Login = () => {
	useEffect(() => {
		const username = prompt("Username");
		const password = prompt("Password");
	}, []);
	return (
		<Layout>
			<div>Loging you in</div>
		</Layout>
	);
};

export default Login;
