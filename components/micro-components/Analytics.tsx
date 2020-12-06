import { useEffect } from "react";
import reactGA from "react-ga";

export default function Analytics(): null {
	useEffect(() => {
		if (!localStorage.getItem("login"))
			reactGA.pageview(window.location.pathname);
	}, []);
	return null;
}
