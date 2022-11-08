<template>
    <base-input
        :input-value="inputAddress"
        placeholder="Address..."
        @updateInputValue="updateInputAddress"
    />
    <base-input
        :input-value="inputAmount"
        placeholder="Amount..."
        @updateInputValue="updateInputAmount"
    />
</template>

<script lang="ts" setup>
import BaseInput from "@/components/UI/BaseInput"
import { defineProps, defineEmits } from "vue"

defineProps({
    inputAddress: String,
    inputAmount: String
})

const emits = defineEmits(["updateInputAddress", "updateInputAmount"])

function updateInputAddress(value: string) {
    emits("updateInputAddress", value)
}
function updateInputAmount(value: string) {
    emits("updateInputAmount", value)
}
</script>

<style scoped>

</style>