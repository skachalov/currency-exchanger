<template>
    <div id="wallet-page-container">
        <div id="wallet-wrapper">
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
                    @click="redirectToSendPage"
                />
            </template>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue"
import { useRouter } from "vue-router"
import WalletData from "@/components/WalletPage/WalletData.vue"
import BaseButton from "@/components/UI/BaseButton.vue"
import BaseLoader from "@/components/UI/BaseLoader.vue";

const router = useRouter()

defineProps({
    isLoaded: {
        type: Boolean,
        default: false
    },
    network: String,
    address: String,
    balance: String
})

function redirectToSendPage() {
    router.push("/send")
}
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
    flex-direction: column;
    align-items: center;
}

#wallet-loader {
    height: 100%;
    display: flex;
    align-items: center;
}
</style>