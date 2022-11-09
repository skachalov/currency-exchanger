<template>
    <transfer-page
        :input-address="inputAddress"
        :input-address-error="inputAddressError"
        :input-amount="inputAmount"
        :input-amount-error="inputAmountError"
        @updateInputAddress="updateInputAddress"
        @updateInputAmount="updateInputAmount"
        @redirectWalletPage="redirectWalletPage"
        @transferCurrency="transferCurrency"
    />
</template>

<script lang="ts" setup>
import TransferPage from "@/pages/TransferPage"
import { ref } from "vue"
import { useRouter } from "vue-router"
import { WalletType } from "@/helpers/WalletConnection/WalletType"
import ConnectionFactory from "@/helpers/WalletConnection/ConnectionFactory"
import TransferValidator from "@/helpers/TransferValidator"
import WalletTransferFacade from "@/helpers/WalletTransferFacade"
import {ethers} from "ethers";

const router = useRouter()

let inputAddress = ref("")
let inputAddressError = ref(false)

let inputAmount = ref("")
let inputAmountError = ref(false)

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
    const yourBalance = await connection.getBalance(address)

    inputAddressError.value = !TransferValidator.ValidateAddress(inputAddress.value, address)
    inputAmountError.value = !TransferValidator.ValidateAmount(inputAmount.value, yourBalance)

    if (inputAddressError.value || inputAmountError.value) return

    const gasPrice = await connection.getGasPrice()

    const transaction = {
        from: address,
        to: inputAddress.value,
        value: ethers.utils.parseEther(inputAmount.value),
        gasLimit: ethers.utils.hexlify(100000),
        gasPrice: gasPrice
    }

    const hash = await WalletTransferFacade.TransferMoney(signer, transaction)

    if (hash !== -1) {
        await router.push(`/status/${ hash }`)
    }
}
</script>