var Router = require('koa-router');

const home = require('./route/home');
const about = require('./route/about');

var router = new Router();

router.get('/', home.index);
router.get('/index.html', home.index);
router.get('/about.html', about.index)

module.exports = router;
