const router = require('koa-router')();
const koaBody = require('koa-body')();
let routeHandler = require('../scripts/routeHandler.js');

router
  .get('/', welcome)
  .post('/', koaBody, routeHandler(test))

function *welcome() {
	let welcomeJSON = { "Welcome" : "Koa API" };
	this.body = welcomeJSON;
};

function test({object}){
  let result = object;
  return result;
}

module.exports = router;
