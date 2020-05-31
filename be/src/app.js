const Koa = require('koa');
const KoaStatic = require('koa-static');
const favicon = require('koa-favicon');
const app = new Koa();

const fePublic = `${__dirname}/../../fe/public`;
app.use(favicon(`${fePublic}/favicon.ico`));
app.use(KoaStatic(fePublic));

app.listen(5800);
