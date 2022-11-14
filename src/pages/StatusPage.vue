<template>
    <base-notification
        :notification="notification"
        @clearNotification="clearNotification"
    />
    <base-title-row
        :title="'Your transaction'"
    />
    <base-link
        :link="link"
        :hash="hash"
    />
    <base-status
        style="margin-top: 15px"
        :status="status"
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
import BaseStatus from "@/components/UI/BaseStatus.vue";
import BaseNotification from "@/components/UI/BaseNotification.vue"

defineProps({
    link: String,
    hash: String,
    status: String,
    notification: String
})

const emits = defineEmits(["redirectWalletPage", "clearNotification"])
function redirectWalletPage() {
    emits("redirectWalletPage")
}
function clearNotification() {
    emits("clearNotification")
}
</script>

<style scoped>
</style>