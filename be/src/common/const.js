exports.feDir = `${__dirname}/../../../fe`;
exports.isProd = process.env.NODE_ENV === 'prod';
exports.isDev = !exports.isProd;