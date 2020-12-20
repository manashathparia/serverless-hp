import mongoose from "mongoose";

// require models
import "./models/post.model";
import "./models/category.model";

const connect = async () => {
	if (!(mongoose.connection.readyState === 1)) {
		await mongoose
			.connect(process.env.DB_URI, {
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
