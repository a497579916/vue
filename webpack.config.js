const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')

const { VueLoaderPlugin } = require('vue-loader');



//这个配置文件 其实就是一个js文件通过node 中的操作 向外暴露了一个配置对象
module.exports = {
    entry:path.join(__dirname,'./src/index.js'),//入口 表示 要使用webpack打包哪个文件
    output:{
        path:path.join(__dirname,'./dist'),  //指定打包到哪个目录去，
        filename:'main.js'                  //指定输出的名称
    },
    module:{
        rules:[
            {test:/\.css$/,use:['style-loader','css-loader']},
            //配置处理，.css文件的第三方loader 规则
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
            //配置处理 less 的第三方loader
            {test:/\.scss$/,use:['style-loader','css-loader','sass-loader']},
            //配置处理 sass的第三方 loader
            {test:/\.(jpg|png|gif|bmp|jpeg)$/,use:'url-loader?limit=7100&name=[hash:8]-[name].[ext]'},
            
            {test:/\.js$/,use:'babel-loader',exclude:/node_modules/},

            { test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader' },

            {test:/\.vue$/,use:'vue-loader'}, //处理.vue文件的loader

            //处理图片路径的loader 可以传值limit 给的值 是图片的大小 单位是byte 如果我们引用的值
            //大于或等于给定的limit值，则不会被转换base64格式的字符串，如果图片小于给定的limit值
            //则会被转会base64的字符串
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            // 指定模板页面，将来根据这个指定的路径生成内存中的页面
            template: path.join(__dirname, './src/index.html'), 
            // 指定生成页面的名称
            filename: 'index.html'
        }),
       
        new VueLoaderPlugin(),
        
    ],
    


    
}