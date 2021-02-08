import { createGlobalStyle } from "styled-components";

declare module "styled-components" {
	export interface DefaultTheme {
		borderRadius?: string;
		color?: string;
		primary?: string;
		border?: string;
		secondary?: string;
		boxShadow?: string;
		logo?: string;
	}
}

export default createGlobalStyle`
.media-content *, .comment-form *, .card-heading,  .input, .col, strong{
	color: ${({ theme }) => theme.color} !important;
}

html{
	background-color: initial;
}
html, body, #root, .app {
	height: 100%
}


a, .media-content a {
	color: #3273dc !important;
	:hover{
		color: ${({ theme }) => theme.color} !important
	}
}

body {
    background: ${({ theme }) => theme.primary};
	margin: 0;
	font-family: Roboto,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji !important;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	-webkit-transition: 0.3s;
	transition: 0.3s;
	scroll-behavior: smooth;
	color: ${({ theme }) => theme.color} !important;
	height: 100%
	
}

code {
	font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
		monospace;
	background-color: initial;
}

p {
	margin-bottom: 1.2em !important;
	font-size: 19px;
	line-height: 1.7;
}

h3{
	font-size: 1.8rem;
    margin-bottom: 15px;
}

ul,
ol {
	margin: 0 0 1.5em 3em !important;
	font-size: 19px;
}

ul {
	list-style: disc !important;
}

h2 {
	font-size: 30px !important;
	font-weight: 700 !important;
	margin-bottom: 20px !important;
	line-height: 1.2em !important;
}
.aligncenter {
	display: block;
	margin: 0 auto;
}

tr td{
    text-align: center !important;
}
pre {
	border: 1px solid #535a5f !important;
    border-radius: 5px;
    background: #202020;
	color: #cecece;
	margin-bottom: 15px;
}

.navbar {
    background: ${({ theme }) => theme.primary};
	border-bottom: 1px solid ${({ theme }) => theme.border};
	position: static
}

@-webkit-keyframes fadein {
  0%{ opacity: 0; }
  100% { opacity: 1; }
}

@keyframes fadein {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

.loading{
	background: ${({ theme }) => theme.color};
	height: 3px;
	position: absolute;
}

.main {
	width: 93%;
	margin: auto;
	margin-top: 50px;
}

.read-more {
	float: right;
}

.fill path, .fill rect{
	fill: ${({ theme }) => theme.color}
}

@media only screen and (max-width: 1024px) {
	.menuLink h3 {
	font-size: 2rem !important;
	
}

.columns{
	justify-content: center
}

.commentForm_cancelReply{
	display: block;
	float: none !important;
}

.article figure{
	width: 100% !important;
}

.main {
		width: 95% !important;
		min-height: 71%
	}

.navbar, .navbar-brand, .navbar-burger{
		min-height: 4.15rem;
	}

.wp-caption {
	width: auto !important;
}
}

@media only screen and (min-width: 1024px) {
	.expert-container {
		padding-left: 0;
    }
    .navbar {
		padding-left: 200px;
		padding-right: 200px;
	}
	.main {
		min-height: 75%
	}
	
}

.input, .textarea{
	background: ${({ theme }) => theme.secondary};
	border: none;
	:active, :focus {
		border: none;
		box-shadow: none;
	}
	::placeholder{
		color: ${({ theme }) => theme.color}
	}
}

.button{
	background-color: #353941 !important;
	border: 2px solid #353941 !important;
	padding-bottom: 0 !important;
	padding-top: 0 !important;
	color: #d7dbdf !important;
	transition: color .1s ease-in-out,background-color .1s ease-in-out;
	:hover{
		background-color: inherit !important;
		border: 2px solid #353941 !important;
		color: ${({ theme }) => theme.color} !important;
	}


`;
