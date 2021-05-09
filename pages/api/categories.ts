import { getPostsByCategory } from "../../apiHandlers/posts";

export default async function categoryRouteHandler(req: any, res: any) {
	if (req.method === "GET") {
		const { category } = req.query;
		console.log(category, "1");
		res.json(await getPostsByCategory(category));
	}
}
