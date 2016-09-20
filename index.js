const koa = require('koa');
const body = require('koa-body');
const cors = require('koa-cors');
const compress = require('koa-compress');
const json = require('koa-json');
const removeTrailingSlashes = require('koa-remove-trailing-slashes');

const app = new koa();

const api = require('koa-router')();

const welcome = require('./routes/index');
const utctime = require('./routes/utcTime');

api.use('/', welcome.routes());
api.use('/utc-time', utctime.routes());

app.use(api.routes());

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
