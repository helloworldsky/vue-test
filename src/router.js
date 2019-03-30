import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import account from './account.vue'
import content from './content.vue'
import login from './login.vue'
import register from './register.vue'
var router = new VueRouter({
    routes:[
        {path:'/account',component:account,children:[
            {path:'login',component:login},
            {path:'register',component:register}
        ]},
        {path:'/content',component:content}
    ]
})
export default router;