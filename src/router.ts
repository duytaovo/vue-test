import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'root',
    redirect: '/products',
  },
  {
    path: '/add-product',
    name: 'AddProduct',
    component: () => import('@/views/ProductForm.vue'), 
  },
  {
    path: '/products',
    name: 'Products',
    component: () => import('@/components/ProductList.vue'), 
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach(async (to, _, next) => {
  next()
})

export default router
