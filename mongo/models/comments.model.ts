import { Schema, model, Types } from "mongoose";
import { modelAreadyDeclared } from "..";

const CommentSchema = new Schema({
	authorName: { type: String, required: true, minlength: 1 },
	authorEmail: { type: String, required: true },
	content: { type: String, required: true },
	responseTo: { type: Types.ObjectId, required: true, ref: "Post" },
	parent: { type: Types.ObjectId, ref: "Comment" },
	date: { type: Date, default: new Date() },
	status: {
		type: String,
		enum: ["approved", "waiting", "trash"],
		default: "waiting",
	},
});

export default (function () {
	if (!modelAreadyDeclared("Comment")) {
		return model("Comment", CommentSchema);
	}
})();
