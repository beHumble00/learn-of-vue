// postcss.config.js
module.exports = {
  plugins: {
    'postcss-px-to-viewport': {
      // viewport适配标准屏宽度
      viewportWidth: 375
    }
  }
}
