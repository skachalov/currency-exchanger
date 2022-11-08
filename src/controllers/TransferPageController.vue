<template>
    <send-page
        :input-address="inputAddress"
        :input-amount="inputAmount"
        @updateInputAddress="updateInputAddress"
        @updateInputAmount="updateInputAmount"
        @redirectWalletPage="redirectWalletPage"
    />
</template>

<script lang="ts" setup>
import SendPage from "@/pages/TransferPage"
import { ref } from "vue"
import { useRouter } from "vue-router"

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
</script>

<style scoped>

</style>