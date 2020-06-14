require('./common/reqx');

const Koa = require('koa');
const KoaStatic = require('koa-static');
const favicon = require('koa-favicon');

const router = require('./router');
const { feDir } = require('./common/const');

const app = new Koa();
app.use((ctx, next) => {
  console.log('====>', ctx.url);
  next();
})
app.use(router.routes()).use(router.allowedMethods());

app.use(favicon(`${feDir}/public/favicon.ico`));
app.use(KoaStatic(`${feDir}/public`));

const port = 5800;
app.listen(port);
console.log('server listen at', port);
