import mongoose from "mongoose";

// require models
import "./models/post.model";
import "./models/category.model";

export function modelAreadyDeclared(model: string) {
	try {
		mongoose.model(model); // it throws an error if the model is still not defined
		return true;
	} catch (e) {
		return false;
	}
}

const connect = async () => {
	if (!(mongoose.connection.readyState === 1)) {
		await mongoose
			.connect(process.env.MONGO_URI, {
				useNewUrlParser: true,
				useCreateIndex: true,
			})
			.then(() => console.log("Database connected"))
			.catch((e) => {
				console.error(e);
				process.exit(1);
			});
	}
};

export default connect;
