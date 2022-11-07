<template>
    <div class="wallet-data-item-wrapper">
        <div class="item-title">
            {{ title }}
        </div>
        <div class="item-value">
            {{ dataItem }}
        </div>
    </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue"

defineProps({
    title: String,
    dataItem: String
})
</script>

<style scoped>
.wallet-data-item-wrapper {
    margin-top: 20px;
    display: flex;
    align-items: center;
    flex-direction: column;
}
.item-title {
    font-family: "Gilroy ExtraBold";
    font-size: 24px
}
.item-value {
    font-family: "Gilroy Regular";
}
</style>