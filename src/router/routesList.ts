import AuthPageController from "@/controllers/AuthPageController.vue"
import WalletPageController from "@/controllers/WalletPageController.vue"
import SendPageController from "@/controllers/SendPageController.vue"

export const routesList = [
    {
        path: "/auth",
        component: AuthPageController
    },
    {
        path: "/wallet",
        component: WalletPageController
    },
    {
        path: "/send",
        component: SendPageController
    }
]