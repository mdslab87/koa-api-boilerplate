module.exports = endpoint => {
	return function *() {
		let args = Object.assign({}, this.request.query, this.request.body, this.params);
		let result = yield endpoint(args);
		this.body = result;
	};
};
