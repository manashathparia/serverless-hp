export default function handler(_req: any, res: any) {
	res.statusCode = 200;
	res.setHeader("Content-Type", "application/json");
	res.end(JSON.stringify({ name: "John Doe" }));
}
