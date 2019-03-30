const path = require('path')
const webpack = require('webpack')
const htmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports={
    entry:path.join(__dirname,'./src/main.js'),
    output:{
        path:path.join(__dirname,'./dist'),
        filename:'bundle.js'
    },
    // ,
    // devServer:{
    //     open:true,
    //     port:3000,
    //     contentBase:'src',
    //     hot:true
    // },
    plugins:[
        // new webpack.HotModuleReplacementPlugin()
        new htmlWebpackPlugin({//自动生成路径
            template:path.join(__dirname,'./src/index.html'),
            filename:'index.html'
            
        }),
        new VueLoaderPlugin()
    ],
    module:{
        rules:[
            {test:/\.css$/,use:['style-loader','css-loader']},//配置CSS
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},//配置LESS
            {test:/\.scss$/,use:['style-loader','css-loader','sass-loader']},//配置SASS
            {test:/\.(jpg|png|gif|bmp|jpeg)$/,use:'url-loader'},//配置URL图片   
            {test: /\.(eot|woff|woff2|ttf|svg)([\\?]?.*)$/,use:'url-loader'},//配置字体文件
            {test:/\.js$/,use:'babel-loader',exclude:/node_modules/},//配置babel来转换高级ES语法
            {test:/\.vue$/,loader:'vue-loader'},//配置VUE
        ]
    },
    resolve:{
        alias:{
            // "vue$":"vue/dist/vue.js"
        }
    }
}