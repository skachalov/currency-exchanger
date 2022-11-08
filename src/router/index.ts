import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"
import { routesList } from "@/router/routesList"

const routes: Array<RouteRecordRaw> = [ ...routesList ]

export default createRouter({
    history: createWebHashHistory(),
    routes
})