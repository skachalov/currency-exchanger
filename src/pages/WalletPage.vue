<template>
    <div id="wallet-page-container">
        <div id="wallet-wrapper">
            <wallet-data
                :network="network"
                :address="address"
                :balance="balance"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue"
import WalletData from "@/components/WalletPage/WalletData.vue"

defineProps({
    network: String,
    address: String,
    balance: String
})
</script>

<style lang="scss" scoped>
#wallet-page-container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

#wallet-wrapper {
    width: 800px;
    height: 500px;
    color: $base2;
    border-radius: 20px;
    background-color: $base1;
    display: flex;
    justify-content: center;
}
</style>