<template>
    <base-notification
        :notification="notification"
        @clearNotification="clearNotification"
    />

    <base-input
        v-for="input in Object.keys(inputsData)"
        :key="inputsData[input].title"
        :title="inputsData[input].title"
        :input-value="inputsData[input].input"
        @updateInputValue="updateInputValue"
        :error="inputsData[input].error"
        :error-text="`Incorrect ${inputsData[input].title.toLowerCase()}`"
    />

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
import BaseButton from "@/components/UI/BaseButton.vue"
import BaseNotification from "@/components/UI/BaseNotification.vue"

defineProps({
    inputsData: Object,
    notification: String
})

const emits = defineEmits(["updateInputAddress", "updateInputAmount",
    "redirectWalletPage", "transferCurrency", "clearNotification"])

function updateInputValue(value: string, title: string) {
    switch (title) {
        case "Address":
            emits("updateInputAddress", value)
            break
        case "Amount":
            emits("updateInputAmount", value)
            break
    }
}
function redirectWalletPage() {
    emits("redirectWalletPage")
}
function transferCurrency() {
    emits("transferCurrency")
}
function clearNotification() {
    emits("clearNotification")
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
</style>