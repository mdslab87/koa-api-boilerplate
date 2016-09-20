var koa = require("koa");
var app = module.exports = koa();
var routes = require("koa-route");

// routes
var indexRouter = require("./index.js");
app.use(routes.get("/", indexRouter.welcome));

// Fire it up
console.log("The app is listening. Port 3000");
