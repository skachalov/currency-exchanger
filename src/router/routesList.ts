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
        path: "/transfer",
        name: "TransferPageController"
    },
    {
        path: "/status/:hash",
        name: "StatusPageController"
    }
]

export const routesList = routeOptions.map(route => {
    return {
        ...route,
        component: () => import(`@/controllers/${route.name}.vue`),
        meta: { layout: route.name }
    }
})