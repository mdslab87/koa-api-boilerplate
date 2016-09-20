let koa = require('koa');
let body = require('koa-body');
let cors = require('koa-cors');
let compress = require('koa-compress');
let json = require('koa-json');
let removeTrailingSlashes = require('koa-remove-trailing-slashes');
var mount = require('koa-mount');

let app = new koa();


var indexAPI = require('./routes/index/app.js');
var timeAPI = require('./routes/utctime/app.js');

app.use(mount('/', indexAPI));
app.use(mount('/utc-time', timeAPI));

app.use(cors());
app.use(compress());

app.use(body({
	formLimit: '1mb',
	jsonLimit: '1mb',
	strict: false,
	multipart: true
}));

app.use(removeTrailingSlashes());
app.use(json({ pretty: true, spaces: 4 }));

app.listen(3000);
console.log("[*] Koa API is listening on port: 3000");
