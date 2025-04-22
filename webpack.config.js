const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // 指定入口文件
  entry: './src/main.js',

  // 输出配置
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true, // 构建前清空dist目录
  },

  // 开发服务器配置
  devServer: {
    static: './dist',
    hot: true,
  },

  // 插件配置
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // 以你的HTML为模板
    }),
  ],

  // 模式：开发/生产
  mode: 'development',
};