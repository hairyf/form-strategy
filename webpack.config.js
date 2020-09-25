const { resolve } = require('path'); // node 内置核心模块，用来处理路径问题。
module.exports = {
  // 接口文件
  entry: {
    "class": "./lib/class.js",
    "form-strategy": "./lib/form-strategy.js"
  },
	// 输出配置
	output: { 
    filename: "[name].js",
		path: resolve(__dirname, 'dist') // 输出文件路径配置
    },
    // production 生产环境 / development 开发环境
    mode: 'development',
    module: {rules: [
        {	// 语法检测修复
            test: /\.js$/,
            exclude: /node_modules/,
               enforce: 'pre', // 优先处理
            loader: 'eslint-loader',
            options: {fix: true}// 自动修复eslint的错误
        },{	// 语法兼容处理
            test: /\.js$/,
			exclude: /node_module/,
			loader: 'babel-loader',
			options:{presets:[[
					'@babel/preset-env',
					{	useBuiltIns: 'usage', // 按需加载
						corejs: {version: 3}, // 指定core-js版本
						// 指定从哪个浏览器版本开始做兼容性处理
  					    targets: {	chrome: '60', firefox: '60', ie: '9', safari: '10', edge: '17' }
					}
			]]},
	 	}
  ]},
};