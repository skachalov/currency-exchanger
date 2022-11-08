<template>
    <auth-page
        :is-failed="isFailed"
        @setConnection="setConnection"
    />
</template>

<script setup>
import AuthPage from "@/pages/AuthPage"
import { WalletType } from "@/helpers/WalletConnection/WalletType"
import WalletConnectionFacade from "@/helpers/WalletConnectionFacade"
import { ref } from "vue"
import { useRouter } from "vue-router"

const isFailed = ref(false)
const router = useRouter()

async function setConnection() {
    try {
        await WalletConnectionFacade.ConnectWallet(WalletType.MetaMask)
        await router.push("/wallet")
    }
    catch {
        isFailed.value = true
    }
}
</script>

<style scoped>

</style>