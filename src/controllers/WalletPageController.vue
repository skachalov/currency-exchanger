<template>
    <wallet-page
        :is-loaded="isLoaded"
        :data="data"
        @redirect="redirectToSendPage"
    />
</template>

<script lang="ts" setup>
import WalletPage from "@/pages/WalletPage"
import { ref, onMounted } from "vue"
import { useRouter } from "vue-router"
import { WalletType } from "@/helpers/WalletConnection/WalletType"
import WalletDataFacade from "@/helpers/WalletDataFacade"

const router = useRouter()

let data = ref({
    network: "",
    address: "",
    balance: "0.0"
})

let isLoaded = ref<boolean>(false)

onMounted(async () => {
    try {
        const walletData = await WalletDataFacade.GetWalletData(WalletType.MetaMask)
        data.value.network = walletData.network
        data.value.address = walletData.address
        data.value.balance = walletData.balance
        isLoaded.value = true
    }
    catch {
        router.push("/auth")
    }
})

function redirectToSendPage() {
    router.push("/transfer")
}
</script>

<style scoped>

</style>