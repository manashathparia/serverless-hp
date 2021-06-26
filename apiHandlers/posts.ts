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
		.populate("categories")
		.populate(args.comments ? "comment" : null)
		.exec();

	const docLength = await PostModel.countDocuments();
	return [posts, docLength];
};

export const getPostsByCategory = async (category: string) => {
	await connectDb();
	const postModel = mongoose.model("Post");
	const categoryModel = mongoose.model("Category");

	const [category_]: any = await categoryModel.find({ slug: category });
	const posts = await postModel.find({
		categories: { $in: [category_["_id"]] },
	});

	return posts;
};

export const getPostBySlug = async (slug: string) => {
	await connectDb();
	const PostModel = mongoose.model("Post");

	const post: any = await PostModel.find({ slug }).populate("comments");
	return post;
};

export const updatePost = async ({ id, body }: any) => {
	await connectDb();
	const PostModel = mongoose.model("Post");
	if (mongoose.Types.ObjectId.isValid(id)) {
		try {
			const post = await PostModel.findById(id);
			if (post) {
				await PostModel.update({ _id: post._id }, body);
				return {
					_id: id,
				};
			} else {
				throw Error(`Post with id ${id} not found`);
			}
		} catch (e) {
			console.error(e);
			throw Error("Error while updating the Post into Database");
		}
	} else {
		throw Error(`Invalid object ID: ${id}`);
	}
};
