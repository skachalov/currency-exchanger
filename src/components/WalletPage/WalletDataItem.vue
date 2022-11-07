<template>
    <div class="wallet-data-item-wrapper">
        <div class="item-title">
            {{ title }}
        </div>
        <div
            class="item-value"
            :class="{ 'to-copy': toCopy }"
            @click="copy"
        >
            {{ dataItem }}
        </div>
    </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue"
import copyText from "@/helpers/copyText"

const props = defineProps({
    title: String,
    dataItem: String,
    toCopy: {
        type: Boolean,
        default: false
    }
})

function copy() {
    if (props.toCopy) {
        copyText(props.dataItem)
    }
}
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
.to-copy {
    cursor: pointer;
}
</style>