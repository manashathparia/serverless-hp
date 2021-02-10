import { getPostBySlug, getPosts } from "../../apiHandlers/posts";

export default async function handler(req: any, res: any) {
	if (req.method === "GET") {
		const { fields = "", page = 1, slug } = req.query;
		if (slug) {
			const post = await getPostBySlug(slug);
			res.json(post);
		}
		const posts = await getPosts({ fields: fields.split(","), page });
		res.json(posts);
	}
}
