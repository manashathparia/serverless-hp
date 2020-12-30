import mongoose from "mongoose";
import connectDb from "../../mongo";

export default async function handler(req: any, res: any) {
	await connectDb();
	const PostModel = mongoose.model("Post");

	if (req.method === "GET") {
		const posts = await PostModel.find({});
		res.json(posts);
	}
}
