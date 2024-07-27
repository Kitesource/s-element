/* eslint-env node */
module.exports = {
  plugins: [
    // 支持嵌套
    require('postcss-nested'),
    require('postcss-each-variables'),
    require('postcss-each')({
      plugins: {
        beforeEach: [require('postcss-for'), require('postcss-color-mix')]
      }
    })
  ]
}
