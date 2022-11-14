<template>
    <auth-page
        :is-failed="isFailed"
        :notification="notification"
        @setConnection="setConnection"
        @clearNotification="clearNotification"
    />
</template>

<script setup>
import AuthPage from "@/pages/AuthPage"
import { WalletType } from "@/helpers/WalletConnection/WalletType"
import WalletConnectionFacade from "@/helpers/WalletConnectionFacade"
import { ref } from "vue"
import { useRouter } from "vue-router"

let notification = ref("")
const isFailed = ref(false)
const router = useRouter()

async function setConnection() {
    try {
        const walletConnectionFacade = await WalletConnectionFacade.ConnectWallet(WalletType.META_MASK)

        if (walletConnectionFacade?.status === -1) {
            notification.value = walletConnectionFacade.description
            return
        }

        await router.push("/wallet")
    }
    catch {
        isFailed.value = true
    }
}
function clearNotification() {
    notification.value = ""
}
</script>