var koa = require("koa");
var app = module.exports = koa();
var routes = require("koa-route");

// routes
var utcTimeRouter = require("./utcTime.js");
app.use(routes.get("/", utcTimeRouter.utcTime));

// Fire it up
console.log("The app is listening. Port 3000");
