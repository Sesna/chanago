import * as Koa from 'koa';

const app = new Koa();

app.use(async ctx => {
  ctx.body = 'Hi from Koa';
});

app.listen(5800);