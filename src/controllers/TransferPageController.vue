<template>
    <transfer-page
        :inputs-data="inputsData"
        :notification="notification"
        @updateInputAddress="updateInputAddress"
        @updateInputAmount="updateInputAmount"
        @redirectWalletPage="redirectWalletPage"
        @transferCurrency="transferCurrency"
        @clearNotification="clearNotification"
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
import { ACCEPTABLE_NETWORKS } from "@/const/acceptableNetworks"
import { ethers } from "ethers"

const router = useRouter()

let inputsData = ref({
    inputAddress: {
        title: "Address",
        input: "",
        error: false,
    },
    inputAmount: {
        title: "Amount",
        input: "",
        error: false
    }
})

let acceptableNetworkError = ref(false)

function updateInputAddress(value: string) {
    inputsData.value.inputAddress.input = value
}
function updateInputAmount(value: string) {
    inputsData.value.inputAmount.input = value
}
function redirectWalletPage() {
    router.push("/wallet")
}

let notification = ref("")

async function transferCurrency() {
    let connection = ConnectionFactory.GetWalletConnection(WalletType.META_MASK)

    if (connection.status === -1) {
        notification.value = connection.description
        return
    }

    connection = connection.description
    const provider = connection.getProvider()
    const signer = await provider.getSigner()
    const address = await signer.getAddress()
    const yourBalance = await connection.getBalance(address)
    const network = await connection.getNetwork()

    acceptableNetworkError.value = !TransferValidator.ValidateNetwork(network.name)

    if (acceptableNetworkError.value) {
        notification.value = `This wallet works only with ${ ACCEPTABLE_NETWORKS.join(',') } networks`
        return
    }

    inputsData.value.inputAddress.error =
        !TransferValidator.ValidateAddress(inputsData.value.inputAddress.input, address)
    inputsData.value.inputAmount.error =
        !TransferValidator.ValidateAmount(inputsData.value.inputAmount.input, ethers.utils.formatEther(yourBalance))

    if (inputsData.value.inputAddress.error || inputsData.value.inputAmount.error) return

    const gasPrice = await connection.getGasPrice()

    const transaction = {
        from: address,
        to: inputsData.value.inputAddress.input,
        value: ethers.utils.parseEther(inputsData.value.inputAmount.input),
        gasLimit: ethers.utils.hexlify(100000),
        gasPrice: gasPrice
    }

    const transferring = await WalletTransferFacade.TransferMoney(signer, transaction)

    if (transferring.status !== -1) {
        await router.push(`/status/${ transferring.description }`)
    }
    else {
        notification.value = transferring.description
    }
}

function clearNotification() {
    notification.value = ""
}
</script>