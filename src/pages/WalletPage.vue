<template>
    <div
        id="wallet-loader"
        v-if="!isLoaded"
    >
        <base-loader>
            Getting wallet data...
        </base-loader>
    </div>

    <template v-else>
        <wallet-data
            :network="network"
            :address="address"
            :balance="balance"
        />
        <base-button
            style="margin-top: 20px"
            :title="'send'"
            :icon-name="'arrow-up'"
            @click="redirect"
        />
    </template>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue"
import WalletData from "@/components/WalletPage/WalletData.vue"
import BaseButton from "@/components/UI/BaseButton.vue"
import BaseLoader from "@/components/UI/BaseLoader.vue"

defineProps({
    isLoaded: {
        type: Boolean,
        default: false
    },
    network: String,
    address: String,
    balance: String
})

const emits = defineEmits(["redirect"])

function redirect() {
    emits("redirect")
}
</script>

<style lang="scss" scoped>

#wallet-loader {
    height: 100%;
    display: flex;
    align-items: center;
}
</style>