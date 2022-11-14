<template>
    <div class="base-title-row">
        {{ title.toUpperCase() }}
    </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue"

defineProps({
    title: String
})
</script>

<style scoped>
.base-title-row {
    font-family: "Gilroy ExtraBold";
    font-size: 24px;
    margin-bottom: 5px;
}
</style>