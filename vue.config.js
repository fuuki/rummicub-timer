module.exports = {
  baseUrl: process.env.NODE_ENV === 'production'
    ? '/rummikub-timer/'
    : '/',
  outputDir: 'docs',
};
