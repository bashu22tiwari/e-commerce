import HomePage from '../components/HomePage.vue'
import Login from '../components/Login.vue'
import Signup from '../components/Signup.vue'
import Category from '../components/Category.vue'
import CategoryDetail from '../components/CategoryDetail.vue'

import {createRouter,createWebHistory} from 'vue-router'

const routes = [
    {
        name:'HomePage',
        component:HomePage,
        path:'/'
    },
    {
        name:'Signup',
        component:Signup,
        path:'/sign-up'
    },
    {
        name:'Login',
        component:Login,
        path:'/login'
    },
    {
        name:'Category',
        component:Category,
        path: "/category/:category",
        props:true
    },
    {
        name:'CategoryDetail',
        component:CategoryDetail,
        path:"/category/:category/:id",
        props:true
    }
];

const router = createRouter({
    history:createWebHistory(),
    routes
});

export default router ;