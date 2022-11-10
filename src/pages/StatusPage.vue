<template>
    <base-title-row
        :title="'Your transaction'"
    />
    <base-link
        :link="link"
        :hash="hash"
    />
</template>

<script lang="ts" setup>
import BaseTitleRow from "@/components/UI/BaseTitleRow"
import { defineProps } from "vue"
import BaseLink from "@/components/UI/BaseLink.vue";

defineProps({
    link: String,
    hash: String
})
</script>

<style scoped>

</style>