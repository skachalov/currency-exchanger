<template>
    <send-page
        :input-address="inputAddress"
        :input-amount="inputAmount"
        @updateInputAddress="updateInputAddress"
        @updateInputAmount="updateInputAmount"
        @redirectWalletPage="redirectWalletPage"
        @transferCurrency="transferCurrency"
    />
</template>

<script lang="ts" setup>
import SendPage from "@/pages/TransferPage"
import { ref } from "vue"
import { useRouter } from "vue-router"
import { WalletType } from "@/helpers/WalletConnection/WalletType"
import ConnectionFactory from "@/helpers/WalletConnection/ConnectionFactory"
import WalletTransferFacade from "@/helpers/WalletTransferFacade"
import {ethers} from "ethers";

const router = useRouter()
let inputAddress = ref("")
let inputAmount = ref("")

function updateInputAddress(value: string) {
    inputAddress.value = value
}
function updateInputAmount(value: string) {
    inputAmount.value = value
}
function redirectWalletPage() {
    router.push("/wallet")
}
async function transferCurrency() {
    const connection = ConnectionFactory.GetWalletConnection(WalletType.MetaMask)
    const provider = connection.getProvider()
    const signer = await provider.getSigner()
    const address = await signer.getAddress()
    const gasPrice = await connection.getGasPrice()

    const tx = {
        from: address,
        to: inputAddress.value,
        value: ethers.utils.parseEther(inputAmount.value),
        gasPrice: gasPrice
    }

    //WalletTransferFacade.TransferMoney(inputAddress.value, inputAmount.value)
}
</script>

<style scoped>

</style>