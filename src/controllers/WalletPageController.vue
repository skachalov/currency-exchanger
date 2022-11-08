<template>
    <wallet-page
        :is-loaded="isLoaded"
        :network="network"
        :address="address"
        :balance="balance"
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

let network = ref<string>("")
let address = ref<string>("")
let balance = ref<string>("0.0")
let isLoaded = ref<boolean>(false)

onMounted(async () => {
    try {
        const walletData = await WalletDataFacade.GetWalletData(WalletType.MetaMask)
        network.value = walletData.network
        address.value = walletData.address
        balance.value = walletData.balance
        isLoaded.value = true
    }
    catch {
        router.push("/auth")
    }
})

function redirectToSendPage() {
    router.push("/send")
}
</script>

<style scoped>

</style>