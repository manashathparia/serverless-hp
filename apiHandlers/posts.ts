import mongoose from "mongoose";
import connectDb from "../mongo";

interface GetPostsArgs {
	only?: string[] | [];
	comments?: boolean;
	page?: number;
}

export const getPosts = async function (
	args: GetPostsArgs = {
		only: [],
		comments: false,
		page: 0,
	}
) {
	await connectDb();
	const PostModel = mongoose.model("Post");
	const postPerPage = 10;

	const posts = await PostModel.find({}, [...args.only])
		.skip(args.page * postPerPage)
		.limit(postPerPage)
		.populate(args.comments ? "comments" : null)
		.exec();

	const docLength = await PostModel.countDocuments();
	return [posts, docLength];
};
