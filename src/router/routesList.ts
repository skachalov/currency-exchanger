import AuthPageController from "@/controllers/AuthPageController.vue"
import WalletPageController from "@/controllers/WalletPageController.vue"
import TransferPageController from "@/controllers/TransferPageController.vue"

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
        path: "/transfer",
        component: TransferPageController
    }
]