<template>
    <div class="small-button-title">
        {{ title }}
    </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue"

defineProps({
    title: String
})
</script>

<style scoped>
.small-button-title {
    font-family: "Gilroy Regular";
}
</style>