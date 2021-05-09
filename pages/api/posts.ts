import { getPostBySlug, getPosts, updatePost } from "../../apiHandlers/posts";

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

	if (req.method === "PUT") {
		const { id } = req.query;
		let body = req.body;

		if (body) {
			body = JSON.parse(body);
		}

		if (!id) {
			res.send("Invalid request");
		}
		try {
			const res_ = await updatePost({ id, body });
			res.json(res_);
		} catch (e) {
			res.send(e);
		}
	}
}
