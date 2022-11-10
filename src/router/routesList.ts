const routeOptions = [
    {
        path: "/auth",
        name: "AuthPageController"
    },
    {
        path: "/wallet",
        name: "WalletPageController"
    },
    {
        path: "/send",
        name: "SendPageController"
    }
]

export const routesList = routeOptions.map(route => {
    return {
        ...route,
        component: () => import(`@/controllers/${route.name}.vue`),
        meta: { layout: route.name }
    }
})