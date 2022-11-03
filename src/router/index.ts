import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import AuthPageController from "@/controllers/AuthPageController.vue"
import WalletPageController from "@/controllers/WalletPageController.vue"

const routes: Array<RouteRecordRaw> = [
    {
        path: '/auth',
        component: AuthPageController
    },
    {
        path: '/wallet',
        component: WalletPageController
    }
]

export default createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})