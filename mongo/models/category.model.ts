import { Schema, model } from "mongoose";

const categorySchema = new Schema({
	category: {
		type: String,
		minlength: 1,
		required: true,
	},
});

export default model("Category", categorySchema);
