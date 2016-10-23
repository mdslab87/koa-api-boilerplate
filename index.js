const koa = require('koa');
const cors = require('koa-cors');
const compress = require('koa-compress');
const json = require('koa-json');
const removeTrailingSlashes = require('koa-remove-trailing-slashes');

const app = new koa();

const api = require('koa-router')();
const apiRoutes = ['utcTime'];
const corsOptions = { origin: '*', methods: 'GET,PUT,POST,DELETE', headers: 'Content-Type, Access-Control-Allow-Headers, Access-Control-Allow-Origin, Authorization, X-Requested-With'};

let index = require('./routes/index');
api.use('/', index.routes());

apiRoutes.forEach(function(apiRoute){
  apiRoute = require('./routes/' + apiRoute);
  api.use('/api', apiRoute.routes());
});

app.use(api.routes());

app.use(cors(corsOptions));
app.use(compress());
app.use(removeTrailingSlashes());
app.use(json({ pretty: true, spaces: 4 }));

app.listen(3000);
console.log("[*] Koa API is listening on port: 3000");
