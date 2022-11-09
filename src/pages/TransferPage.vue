<template>
    <div>
        <base-input
            :title="'Address'"
            :input-value="inputAddress"
            @updateInputValue="updateInputAddress"
            :error="inputAddressError"
            :error-text="'Incorrect address'"
        />
    </div>
    <div>
        <base-input
            :title="'Amount'"
            :input-value="inputAmount"
            @updateInputValue="updateInputAmount"
            :error="inputAmountError"
            :error-text="'Incorrect amount'"
        />
    </div>
    <div class="button-container">
        <base-button
            :title="'cancel'"
            :icon-name="'arrow-rotate-left'"
            @click="redirectWalletPage"
        />
        <base-button
            :title="'send'"
            :icon-name="'arrow-up'"
            @click="transferCurrency"
        />
    </div>
</template>

<script lang="ts" setup>
import BaseInput from "@/components/UI/BaseInput"
import { defineProps, defineEmits } from "vue"
import BaseButton from "@/components/UI/BaseButton.vue";

defineProps({
    inputAddress: String,
    inputAddressError: Boolean,
    inputAmount: String,
    inputAmountError: Boolean
})

const emits = defineEmits(["updateInputAddress", "updateInputAmount",
    "redirectWalletPage", "transferCurrency"])

function updateInputAddress(value: string) {
    emits("updateInputAddress", value)
}
function updateInputAmount(value: string) {
    emits("updateInputAmount", value)
}
function redirectWalletPage() {
    emits("redirectWalletPage")
}
function transferCurrency() {
    emits("transferCurrency")
}
</script>

<style scoped>
.button-container {
    margin-top: 25px;
    width: 20%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.base-warning {
    position: absolute;
}
</style>