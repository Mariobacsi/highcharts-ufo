import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Root',
        component: () => import('@/views/Root.vue')
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue')
    },
    {
        path: '/home',
        name: 'Home',
        component: () => import('../views/Home.vue')
    }
]

const router = new VueRouter({
    routes
})

export default router
