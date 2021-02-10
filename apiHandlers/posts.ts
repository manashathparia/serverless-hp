import mongoose from "mongoose";
import connectDb from "../mongo";

interface GetPostsArgs {
	fields?: string[] | [];
	comments?: boolean;
	page?: number;
	noLimit?: boolean;
}

export const getPosts = async function (
	args: GetPostsArgs = {
		fields: [],
		comments: false,
		page: 1,
		noLimit: false,
	}
) {
	await connectDb();
	const PostModel = mongoose.model("Post");
	const postPerPage = 10;

	const posts = await PostModel.find({}, [...args.fields])
		.skip((args.page - 1) * postPerPage)
		.limit(args.noLimit ? null : postPerPage)
		.populate(args.comments ? "comments" : null)
		.exec();

	const docLength = await PostModel.countDocuments();
	return [posts, docLength];
};

export const getPostBySlug = async (slug: string) => {
	await connectDb();
	const PostModel = mongoose.model("Post");

	const post = await PostModel.find({ slug }).populate("comments");
	return post;
};
