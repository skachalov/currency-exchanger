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

const isFailed = ref(false)

async function setConnection() {
    try {
        const connection = ConnectionFactory.GetWalletConnection(WalletType.MetaMask)
        const provider = connection.getProvider()
        await connection.getAccount()
    }
    catch {
        isFailed.value = true
    }
}
</script>

<style scoped>

</style>