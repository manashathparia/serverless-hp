import React, { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { dark, light } from "../theme";
import { toggleDarkMode } from "../redux/Actions/preferences.actions";

export default function _ThemeProvider({ children }: any) {
	const dispatch = useDispatch();
	const darkModeRan = useSelector(
		({ preferences }: any) => preferences.darkModeRan
	);

	useEffect(() => {
		const isSysDark =
			window && window.matchMedia("(prefers-color-scheme: dark)").matches;
		if (isSysDark && !darkModeRan) {
			dispatch(toggleDarkMode());
		}
	}, []);

	const isDark = useSelector(({ preferences }: any) => preferences.darkMode);

	return (
		<ThemeProvider theme={isDark ? dark : light}>{children}</ThemeProvider>
	);
}
