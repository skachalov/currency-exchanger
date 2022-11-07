<template>
    <div id="wallet-data-container">
        <wallet-data-item
            :title="'Network'"
            :data-item="network"
        />
        <wallet-data-item
            :title="'Address'"
            :data-item="address"
            :to-copy="true"
        />
        <wallet-data-item
            :title="'Balance'"
            :data-item="balance"
        />
    </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue"
import WalletDataItem from "@/components/WalletPage/WalletDataItem.vue"

defineProps({
    network: String,
    address: String,
    balance: String
})
</script>