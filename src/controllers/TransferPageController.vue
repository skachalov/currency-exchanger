<template>
    <send-page
        :input-address="inputAddress"
        :input-amount="inputAmount"
        @updateInputAddress="updateInputAddress"
        @updateInputAmount="updateInputAmount"
    />
</template>

<script lang="ts" setup>
import SendPage from "@/pages/TransferPage"
import { ref } from "vue"

let inputAddress = ref("")
let inputAmount = ref("")

function updateInputAddress(value: string) {
    inputAddress.value = value
}
function updateInputAmount(value: string) {
    inputAmount.value = value
}
</script>

<style scoped>

</style>