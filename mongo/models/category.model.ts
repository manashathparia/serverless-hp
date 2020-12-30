import { Schema, model } from "mongoose";
import { modelAreadyDeclared } from "..";

const categorySchema = new Schema({
	category: {
		type: String,
		minlength: 1,
		required: true,
	},
});

export default (function () {
	if (!modelAreadyDeclared("Category")) {
		return model("Category", categorySchema);
	}
})();
