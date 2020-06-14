/**
 * 拓展koa的context对象，添加pug的render方法
 */
const context = require('koa/lib/context');
const pug = require('pug');

const { feDir, isProd } = require('./const');

const viewDir = `${feDir}/views/`;

exports.cache = {};

context.render = function(name, args = {}) {
  console.log('render', name);
  this.body = pug.renderFile(viewDir + name, args);
}
