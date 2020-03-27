import Vue from 'vue';
import VueRouter from 'vue-router';
//import Home from '../views/Home.vue';
import Home from '@/pages/Home';
import Admin from "@/pages/Admin";
import Cart from "@/pages/Cart";
import Detail from '@/pages/Detail'
//Admin Components
import Index from '@/pages/admin/Index'
import New from '@/pages/admin/New'
import Products from '@/pages/admin/Products'
import Edit from '@/pages/admin/Edit'
import Manufacturers from "@/pages/admin/Manufacturers"

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Index,
    children: [{
      path: 'new',
      name: 'New',
      component: New
    }, {
      //path 为空 默认出口路由
      // 当 /admin 匹配成功，
      // Products 会被渲染在 Index 的 <router-view> 中
      path: '',
      name: 'Products',
      component: Products
    }, {
      path: 'manufacturers',
      name: 'Manufacturers',
      component: Manufacturers
    },
    , {
      path: 'edit/:id',
      name: 'Edit',
      component: Edit
    }]
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail
  }
]

const router = new VueRouter({
  routes
})

export default router