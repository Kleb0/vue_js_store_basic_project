import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductDetail from '../views/ProductDetail.vue'
import ProductList from '../views/ProductList.vue'
import ShoppingBag from '../views/ShoppingBag.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/product-detail',
    name : 'ProductDetail',
    component : ProductDetail

  },
  {
    path: '/product-list',
    name : 'ProductList',
    component : ProductList
  },
  {
    path : '/shopping-bag',
    name : 'ShoppingBag',
    component : ShoppingBag
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
