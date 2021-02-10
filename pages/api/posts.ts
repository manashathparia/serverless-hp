import { getPosts } from "../../apiHandlers/posts";

export default async function handler(req: any, res: any) {
	if (req.method === "GET") {
		const { fields = "", page = 1 } = req.query;
		const posts = await getPosts({ fields: fields.split(","), page });
		res.json(posts);
	}
}
