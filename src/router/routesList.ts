import AuthPageController from "@/controllers/AuthPageController.vue"
import WalletPageController from "@/controllers/WalletPageController.vue"

export const routesList = [
    {
        path: '/auth',
        component: AuthPageController
    },
    {
        path: '/wallet',
        component: WalletPageController
    }
]