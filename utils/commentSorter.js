class Sort {
	constructor(config) {
		this.config = config;
	}

	getCommentById(_ID, list = []) {
		for (let j = 0; j < list.length; j++) {
			if (list[j][this.config.id] == _ID) {
				console.log(typeof list[j]);
				return list[j];
			}
		}
	}

	getCommentDepth(theComment, comments_list = []) {
		let depthLevel = 0;
		console.log(typeof theComment, 1);
		while (theComment[this.config.parent]) {
			console.log(typeof theComment, 2);
			if (theComment[this.config.parent]) {
				theComment = this.getCommentById(
					theComment[this.config.parent],
					comments_list
				);
				depthLevel++;
			}
		}
		return depthLevel;
	}

	arrangeComments(list = []) {
		const maxDepth = 2;

		for (let i = 0; i < list.length; i += 1) {
			list[i][this.config.children] = [];
			list[i][this.config.depth] = this.getCommentDepth(list[i], list);
			if (this.config.menu) {
				const rep = new RegExp("test/");
				list[i].url = url.parse(list[i].url).pathname?.replace(rep, "");
			}
		}

		for (let i = maxDepth; i > 0; i--) {
			for (let j = 0; j < list.length; j++) {
				if (list[j][this.config.depth] == i) {
					for (let k = 0; k < list.length; k++) {
						if (list[j][this.config.parent] == list[k][this.config.id]) {
							list[k][this.config.children].push(list[j]);
						}
					}
				}
			}
		}

		for (let i = list.length - 1; i >= 0; i--) {
			if (list[i][this.config.parent]) {
				list.splice(i, 1);
			}
		}

		return list;
	}
}

const sortComments = new Sort({
	id: "_id",
	parent: "parent",
	date: "date",
	children: "children",
	depth: "comment_depth",
});

export default sortComments;
