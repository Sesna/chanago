const Koa = require('koa');
const KoaStatic = require('koa-static');
const favicon = require('koa-favicon');
const app = new Koa();

app.use(favicon(__dirname + '/../public/favicon.ico'));
app.use(KoaStatic('./public'));

app.listen(5800);
