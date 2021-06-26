/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useRef, useEffect, RefObject } from "react";
import axios from "axios";
import Loader from "../icons/loading";
import Avatar from "../icons/avatar";

const commentStyles = {
	padding: "20px",
	borderRadius: "3px",
	marginTop: "20px",
};

const CommentForm = ({
	postID,
	toggle,
	elRef,
	replyingTo,
	notify,
}: {
	postID: number;
	toggle: Function;
	elRef: RefObject<HTMLInputElement>;
	replyingTo: {
		id: number;
		target: string;
	};
	notify: Function;
}) => {
	const [name, _updateName] = useState("");
	const [email, _updateEmail] = useState("");
	const [comment, _updateComment] = useState("");
	const [loading, load] = useState(false);

	const updateName = (e: React.ChangeEvent<HTMLInputElement>) =>
		_updateName(e.target.value);
	const updateEmail = (e: React.ChangeEvent<HTMLInputElement>) =>
		_updateEmail(e.target.value);
	const updateComment = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
		_updateComment(e.target.value);

	useEffect(() => {
		elRef.current.focus();
	}, [elRef]);

	const handleReply = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		load(true);
		axios
			.post("/comments", {
				post: postID,
				author_name: name,
				author_email: email,
				content: comment,
				parent: postID !== replyingTo.id ? replyingTo.id : null,
			})
			.then(() => {
				load(false);
				notify({
					varient: "success",
					message: "Comment sucessfully posted and awaiting moderation",
					autoDismiss: true,
				});
				_updateComment("");
				_updateName("");
				_updateEmail("");
			})
			.catch((e: Error) => {
				notify({
					varient: "error",
					message: e.message,
				});
				load(false);
			});
	};

	return (
		<form
			className="comment-form"
			style={{ marginTop: "5px" }}
			onSubmit={handleReply}
		>
			<h5 className="title is-5">Replying to {replyingTo.target}</h5>
			<article className="media">
				<figure className="media-left">
					<p className="image is-64x64">
						<Avatar />
					</p>
				</figure>
				<div className="media-content">
					<div className="field">
						<p className="control">
							<input
								type="name"
								ref={elRef}
								className="input"
								placeholder="Name"
								value={name}
								onChange={updateName}
							/>
						</p>
					</div>
					<div className="field">
						<p className="control">
							<input
								value={email}
								onChange={updateEmail}
								type="email"
								className="input"
								placeholder="Email"
							/>
						</p>
					</div>
					<div className="field">
						<p className="control">
							<textarea
								className="textarea"
								placeholder="Add a comment..."
								value={comment}
								onChange={updateComment}
							></textarea>
						</p>
					</div>

					<div className="field">
						<p className="control">
							<button disabled={loading} className="button" type="submit">
								{loading ? (
									<Loader style={{ height: "92%" }} />
								) : (
									"Post comment"
								)}
							</button>
							<span />
							<a
								style={{ float: "right", marginTop: "7px" }}
								onClick={() => toggle(false)}
								className="commentForm_cancelReply"
							>
								Cancel reply
							</a>
						</p>
					</div>
				</div>
			</article>
		</form>
	);
};

interface CommentProps {
	children: JSX.Element;
	authorName: string;
	_id: string;
	content: string;
	date: string;
	toggle: Function;
	comment_depth: number;
}

const Comment = ({
	children,
	authorName: name,
	_id: id,
	content: content,
	date: date,
	toggle,
	comment_depth,
}: CommentProps) => (
	<article className="media">
		<figure className="media-left">
			<p className="image is-64x64">
				<Avatar />
			</p>
		</figure>
		<div className="media-content">
			<div className="content">
				<p>
					<strong>{name}</strong> ·{" "}
					<span style={{ fontSize: 16 }}>{new Date(date).toDateString()}</span>{" "}
					{comment_depth >= 2 ? null : (
						<small>
							·{" "}
							<a
								onClick={() => {
									toggle({ target: name, id });
								}}
							>
								Reply{" "}
							</a>{" "}
						</small>
					)}
					<br />
					<span dangerouslySetInnerHTML={{ __html: content }} />
					<br />
				</p>
			</div>
			{children}
		</div>
	</article>
);

const renderComments = (arr: Array<any>, Component: any, toggle: Function) =>
	arr?.map((comment) => (
		<Component key={comment._id} {...comment} toggle={toggle}>
			{comment?.children?.length > 0
				? renderComments(comment.children, Component, toggle)
				: null}
		</Component>
	));

export default function Comments({
	comments = [],
	postID,
	notify,
}: {
	comments: [any] | [];
	postID: number;
	notify: Function;
}) {
	const elRef = useRef(null);
	const [show, _toggleCommentForm] = useState(false);
	const [replyingTo, handleReplyingTo] = useState({ target: "Post", id: 0 });

	const toggleCommentForm = (replyingTo: { target: string; id: number }) => {
		handleReplyingTo(replyingTo);
		if (show && elRef.current) elRef.current.focus();
		else _toggleCommentForm(true);
	};

	const _comments = renderComments(comments, Comment, toggleCommentForm);

	return (
		<div style={commentStyles}>
			<div className="field" style={{ marginBottom: "30px" }}>
				<h2 style={{ display: "inline" }}>Comments</h2>

				<button
					className="button"
					style={{ float: "right" }}
					onClick={() => toggleCommentForm({ target: "post", id: 0 })}
				>
					Reply to post
				</button>
			</div>

			{_comments.length > 0 ? (
				_comments
			) : (
				<div style={{ textAlign: "center", padding: "20px" }}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="70"
						height="70"
						data-name="Layer 1"
						viewBox="0 0 24 24"
						className="fill"
					>
						<path d="M10.19,5.23A7.12,7.12,0,0,1,12,5a7,7,0,0,1,7,7,7.12,7.12,0,0,1-.23,1.81,1,1,0,0,0,.7,1.23,1.15,1.15,0,0,0,.26,0,1,1,0,0,0,1-.74A8.91,8.91,0,0,0,21,12a9,9,0,0,0-9-9,8.91,8.91,0,0,0-2.33.3A1,1,0,0,0,9,4.53,1,1,0,0,0,10.19,5.23ZM21.71,20.29l-18-18A1,1,0,0,0,2.29,3.71L5,6.38A9,9,0,0,0,5,17.62L3.29,19.29a1,1,0,0,0-.21,1.09A1,1,0,0,0,4,21h8a9,9,0,0,0,5.62-2l2.67,2.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM12,19H6.41l.64-.63a1,1,0,0,0,0-1.41A7,7,0,0,1,6.4,7.81l9.79,9.79A7,7,0,0,1,12,19Z" />
					</svg>
					<h3
						className=" is-4"
						style={{ fontSize: "23px", fontWeight: "bold" }}
					>
						No comments
					</h3>
				</div>
			)}

			{show && (
				<CommentForm
					elRef={elRef}
					postID={postID}
					toggle={_toggleCommentForm}
					replyingTo={replyingTo}
					notify={notify}
				/>
			)}
		</div>
	);
}
