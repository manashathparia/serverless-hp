import { Schema, model } from "mongoose";

const postSchema = new Schema({
	title: {
		type: String,
		default: "Untitled",
	},
	slug: {
		type: String,
		required: [true, "slug is required"],
		unique: true,
		lowercase: true,
	},
	content: String,
	date_created: Date,
	date_modified: Date,
	excerpt: String,
	author: { type: Schema.Types.ObjectId, ref: "User" },
	categories: [{ type: Schema.Types.ObjectId, ref: "Category" }],
	tags: [String],
	comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
	featuredImage: {
		type: {
			url: String,
			altText: String,
		},
	},
	status: {
		type: String,
		required: true,
		enum: ["published", "draft", "trashed"],
		default: "draft",
	},
	type: {
		type: String,
		enum: ["post", "page"],
		required: true,
	},
});

export default model("Post", postSchema);
