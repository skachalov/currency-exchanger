<template>
    <auth-page
        :is-failed="isFailed"
        @setConnection="setConnection"
    />
</template>

<script setup>
import AuthPage from "@/pages/AuthPage"
import ConnectionFactory from "@/helpers/WalletConnection/ConnectionFactory"
import { WalletType } from "@/helpers/WalletConnection/WalletType"
import { ref } from "vue"
import { useRouter } from "vue-router"

const isFailed = ref(false)
const router = useRouter()

async function setConnection() {
    try {
        const connection = ConnectionFactory.GetWalletConnection(WalletType.MetaMask)
        const provider = connection.getProvider()
        await connection.getAccount()
        router.push("/wallet")
    }
    catch {
        isFailed.value = true
    }
}
</script>

<style scoped>

</style>