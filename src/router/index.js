import { createRouter, createWebHistory } from 'vue-router'
import home from '@/views/homeView.vue'
import search from '@/views/searchView.vue'
import create from '@/views/createVies.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: home },
        { path: '/search', component: search },
        { path: '/create', component: create }
    ]
})

export default router