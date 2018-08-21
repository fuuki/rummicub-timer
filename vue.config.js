module.exports = {
  baseUrl: process.env.NODE_ENV === 'production'
    ? '/rummicub-timer/'
    : '/',
  outputDir: 'docs'
}