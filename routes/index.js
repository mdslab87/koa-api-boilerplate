const router = require('koa-router')();

router
  .get('/', welcome)

module.exports = router;

function *welcome() {
	let welcomeJSON = { "Welcome" : "Koa API" };
	this.body = welcomeJSON;
};
