<template>
    <div
        class="base-helper"
    >
        {{ innerText }}
    </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue"

defineProps({
    innerText: String
})
</script>

<style lang="scss" scoped>
.base-helper {
    position: absolute;
    padding: 3px 5px;
    font-size: 12px;
    color: $bg;
    background-color: $base2;
    border-radius: 10px;
}
</style>