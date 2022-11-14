<template>
    <a
        class="base-link"
        :href="link"
        target="_blank"
    >
        {{ hash }}
    </a>
</template>

<script lang="ts" setup>
import { defineProps } from "vue"

defineProps({
    link: String,
    hash: String
})
</script>

<style lang="scss" scoped>
.base-link {
    color: $base3;
    text-decoration: none;
    font-family: "Gilroy Regular";
}
.base-link:hover {
    text-decoration: underline $base3;
}
</style>