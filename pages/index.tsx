import Link from "next/link";
import Header from "../components/Header";

const IndexPage = () => (
	<>
		<Header />
		<h1>Hello Next.js 👋</h1>
		<p>
			<Link href="/about">
				<a>About</a>
			</Link>
		</p>
	</>
);

export default IndexPage;
