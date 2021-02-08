import { getPosts } from "../../apiHandlers/posts";

export default async function handler(req: any, res: any) {
	if (req.method === "GET") {
		const posts = await getPosts();
		res.json(posts);
	}
}
