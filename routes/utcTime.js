const router = require('koa-router')();
const koaBody = require('koa-body')();
let routeHandler = require('../scripts/routeHandler.js');

router
  .get('/utcTime', utcTime)
  .post('/test', koaBody, routeHandler(test))

function *utcTime() {
  let now = new Date();

  let month = now.getUTCMonth() + 1;
  if (month < 10) month = "0" + month;

  let day = now.getUTCDate();
  if (day < 10) day = "0" + day;

  let hours = now.getUTCHours();
  if (hours < 10) hours = "0" + hours;

  let minutes = now.getUTCMinutes();
  if (minutes < 10) minutes = "0" + minutes;

  let seconds = now.getUTCSeconds();
  if (seconds < 10) seconds = "0" + seconds;

  let time = `${day} - ${month}  ${hours} : ${minutes} : ${seconds}`;
	return { "utc-time" : time };
};

function test({object}){
  let result = object;
  return result;
}

module.exports = router;
