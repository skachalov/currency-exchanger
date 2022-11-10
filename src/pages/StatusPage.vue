<template>
    <base-title-row
        :title="'Your transaction'"
    />
    <base-link
        :link="link"
        :hash="hash"
    />
    <base-button
        style="margin-top: 25px"
        :title="'return'"
        :icon-name="'arrow-rotate-left'"
        @click="redirectWalletPage"
    />
</template>

<script lang="ts" setup>
import BaseTitleRow from "@/components/UI/BaseTitleRow"
import { defineProps, defineEmits } from "vue"
import BaseLink from "@/components/UI/BaseLink.vue"
import BaseButton from "@/components/UI/BaseButton.vue"

defineProps({
    link: String,
    hash: String
})

const emits = defineEmits(["redirectWalletPage"])
function redirectWalletPage() {
    emits("redirectWalletPage")
}
</script>

<style scoped>
</style>