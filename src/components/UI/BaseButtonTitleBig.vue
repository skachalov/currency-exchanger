<template>
    <h2>
        {{ title }}
    </h2>
</template>

<script lang="ts" setup>
import { defineProps } from "vue"

defineProps({
    title: String
})
</script>