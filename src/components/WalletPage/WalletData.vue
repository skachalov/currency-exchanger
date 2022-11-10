<template>
    <div>
        <wallet-data-item
            v-for="d in Object.keys(data)"
            :key="d"
            :title="d.toUpperCase()"
            :data-item="data[d]"
            :to-copy="d === 'address'"
        />
    </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue"
import WalletDataItem from "@/components/WalletPage/WalletDataItem.vue"

defineProps({
    data: Object
})
</script>