import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import { routesList } from "@/router/routesList"

const routes: Array<RouteRecordRaw> = [ ...routesList ]

export default createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})