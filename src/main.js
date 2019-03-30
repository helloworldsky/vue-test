import Vue from 'vue'
// import Vue from '../node_modules/vue/dist/vue.js'

import app from './app.vue'
//导入mint-ui组件
import { Header } from 'mint-ui';
import '../node_modules/mint-ui/lib/style.css';

//导入mui
import '../mui-master/dist/css/mui.css';


Vue.component(Header.name, Header);


var wm= new Vue({
    el:'#app',
    methods:{},
    // components:{
    //     app
    // },
    render:c=>c(app)
})