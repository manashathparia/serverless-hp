import { Schema, model, Document } from "mongoose";

export interface PostType {
	title: string;
	slug: string;
	content: string;
	date_created: Date;
	date_modified: Date;
	excerpt: string;
	author: Schema.Types.ObjectId;
	categories: Schema.Types.ObjectId;
	tags: [string];
	comments: Schema.Types.ObjectId;
	featuredImage: {
		type: {
			url: String;
			altText: String;
		};
	};
	status: "published" | "draft" | "trashed";
	type: "post" | "page";
}

interface _Post extends PostType, Document {}

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

export default model<_Post>("Post", postSchema);
