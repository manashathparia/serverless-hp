import mongoose from "mongoose";
import nextConnect from "next-connect";
import dbConnect from "../mongo";

async function database(req: any, _res: any, next: any) {
	await dbConnect();
	req.db = mongoose;
	return next();
}
const middleware = nextConnect();
middleware.use(database);
export default middleware;
