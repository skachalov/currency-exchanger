<template>
    <base-input
        v-model="inputLineAddress"
        placeholder="Address..."
    />
    <base-input
        v-model="inputLineAmount"
        placeholder="Amount..."
    />
</template>

<script lang="ts" setup>
import BaseInput from "@/components/UI/BaseInput"
import { ref } from "vue"

let inputLineAddress = ref("")
let inputLineAmount = ref("")
</script>

<style scoped>

</style>