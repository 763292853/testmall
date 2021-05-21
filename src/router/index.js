import Vue from 'vue'
import Router from 'vue-router'

const Home =()=> import('views/home/Home.vue')
const Cart =()=> import('views/cart/Cart.vue')
const Fenlei =()=> import('views/fenlei/Fenlei.vue')
const Me =()=> import('views/me/Me.vue')

Vue.use(Router)

const routes=[
    {
        path:'/',
        redirect:'/home'
    }
    ,{
        path:'/home',
        component:Home
    }
    ,{
        path:'/cart',
        component:Cart
    }
    ,{
        path:'/fenlei',
        component:Fenlei
    }
    ,{
        path:'/me',
        component:Me
    }
]

export default new Router({
  routes,
  mode:'history'
})
