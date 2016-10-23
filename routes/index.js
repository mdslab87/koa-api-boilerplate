const router = require('koa-router')();

router
  .get('/', welcome)

function *welcome() {
	let welcomeJSON = { "Welcome" : "Koa API" };
	this.body = welcomeJSON;
};

module.exports = router;
