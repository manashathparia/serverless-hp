// /* eslint-disable no-alert */
// import React, { useEffect, useState } from "react";
// import styled from "styled-components";
// import { connect } from "react-redux";
// import axios from "axios";
// import config from "../../config.json";

// function AdminTools({ route, post, router }) {
// 	const [login, handleLogin] = useState(false);
// 	const [newPostWindow, updateNewPostWindow] = useState<Window | null>(null);
// 	const [EditPostWindow, updateEditPostWindow] = useState<Window | null>(null);
// 	const [isPost, toggleIsPost] = useState(false);
// 	const [show, hide] = useState(true);

// 	useEffect(() => {
// 		if (post.id) {
// 			toggleIsPost(true);
// 		} else toggleIsPost(false);
// 	}, [post.id]);

// 	useEffect(() => {
// 		if (route && !localStorage.getItem("login")) {
// 			const _username = prompt("Username :");
// 			const _password = prompt("Password:");
// 			localStorage.setItem("username", _username);
// 			localStorage.setItem("password", _password);
// 			localStorage.setItem("login", "true");
// 		}
// 		const userN = localStorage.getItem("username");
// 		const pass = localStorage.getItem("password");
// 		handleLogin(userN === "manash" && pass === "athparia");
// 	}, []);

// 	const handleNewPost = () => {
// 		if (!newPostWindow) {
// 			const w = window.open(`${config.api}/wp-admin/post-new.php`);
// 			updateNewPostWindow(w);
// 		} else newPostWindow.focus();
// 	};

// 	const handleEditPost = () => {
// 		if (post.id) {
// 			if (!EditPostWindow) {
// 				const w = window.open(
// 					`${config.api}/wp-admin/post.php?post=${post.id}&action=edit`
// 				);
// 				updateEditPostWindow(w);
// 			} else {
// 				EditPostWindow.focus();
// 			}
// 		}
// 	};

// 	const handleClearCache = () => {
// 		const { pathname } = router.location;
// 		const a = pathname === "/" ? "/all_posts" : pathname;
// 		axios.post(`clear${a}`);
// 	};

// 	return login && show ? (
// 		<AdminBar>
// 			<Item
// 				onClick={() => window.open(`${config.api}/admin`)}
// 				style={{ paddingRight: "0" }}
// 			>
// 				<svg
// 					xmlns="http://www.w3.org/2000/svg"
// 					data-name="Layer 1"
// 					viewBox="0 0 24 24"
// 					width="25px"
// 					style={{ verticalAlign: "middle" }}
// 				>
// 					<path
// 						fill="white"
// 						d="M12,2a10.00009,10.00009,0,1,0,10,9.99976A10.01117,10.01117,0,0,0,12,2ZM3.00928,11.99976a8.95547,8.95547,0,0,1,.77844-3.659L8.07654,20.09131A8.99123,8.99123,0,0,1,3.00928,11.99976ZM12,20.99121a8.98726,8.98726,0,0,1-2.54-.36633l2.69788-7.83869,2.7633,7.57135a.84386.84386,0,0,0,.06446.12391A8.97138,8.97138,0,0,1,12,20.99121ZM13.239,7.78436c.54126-.02844,1.02906-.08539,1.02906-.08539a.37165.37165,0,0,0-.05738-.741s-1.4563.11432-2.39648.11432c-.8833,0-2.3678-.11432-2.3678-.11432a.37165.37165,0,0,0-.057.741s.4585.05695.943.08539l1.40075,3.838-1.968,5.90087L6.49133,7.78436C7.033,7.75592,7.52026,7.699,7.52026,7.699a.37166.37166,0,0,0-.05749-.741s-1.45593.11432-2.39612.11432c-.1687,0-.36768-.00415-.57861-.01093A8.98815,8.98815,0,0,1,18.07117,5.36957c-.0387-.00238-.07654-.0072-.11634-.0072A1.55669,1.55669,0,0,0,16.445,6.958a4.21016,4.21016,0,0,0,.88317,2.1087,4.73577,4.73577,0,0,1,.74122,2.47955,10.88314,10.88314,0,0,1-.68409,2.9065l-.897,2.99634ZM16.52,19.771l2.74609-7.9397A8.489,8.489,0,0,0,19.94983,8.611a6.9105,6.9105,0,0,0-.06043-.92456A8.99224,8.99224,0,0,1,16.52,19.771Z"
// 					/>
// 				</svg>
// 			</Item>
// 			<Item onClick={handleNewPost}>New post</Item>
// 			<Item disabled={!isPost} onClick={handleEditPost}>
// 				Edit post
// 			</Item>
// 			<Item onClick={handleClearCache}>Clear cache</Item>
// 			<Item onClick={() => hide(!show)} style={{ float: "right" }}>
// 				hide
// 			</Item>
// 		</AdminBar>
// 	) : null;
// }

// export default connect(({ posts, router }) => ({
// 	post: posts.current_post,
// 	router,
// }))(AdminTools);

// const AdminBar = styled.div`
// 	width: 100%;
// 	height: 40px;
// 	margin: 0;
// 	background-color: #222222;
// `;

// const Item = styled.button`
// 	margin: 0;
// 	display: inline-block;
// 	padding: 5px 10px;
// 	color: white;
// 	height: 100%;
// 	background-color: initial;
// 	border: none;
// 	cursor: pointer;
// 	:disabled {
// 		color: gray;
// 	}
// `;
