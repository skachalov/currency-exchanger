<template>
    <wallet-page
        :network="network"
        :address="address"
        :balance="balance"
    />
</template>

<script lang="ts" setup>
import WalletPage from "@/pages/WalletPage"
import { ref, onMounted } from "vue"
import { WalletType } from "@/helpers/WalletConnection/WalletType"
import WalletDataFacade from "@/helpers/WalletDataFacade"

const network = ref<string>("")
const address = ref<string>("")
const balance = ref<string>("0.0")

onMounted(async () => {
    const walletData = await WalletDataFacade.GetWalletData(WalletType.MetaMask)
    network.value = walletData.network
    address.value = walletData.address
    balance.value = walletData.balance
})
</script>

<style scoped>

</style>