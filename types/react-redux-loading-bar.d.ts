declare module "react-redux-loading-bar" {
	export default function LoadingBar(...args: any): JSX.Element {}
	export const loadingBarReducer = function (...args: any): any {};
	export const showLoading = (): void => {};
	export const hideLoading = (): void => {};
}
