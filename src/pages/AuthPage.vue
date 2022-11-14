<template>
    <base-notification
        :notification="notification"
        @clearNotification="clearNotification"
    />
    <base-button
        :title="'Login'"
        :class-name="'big'"
        @click="setConnection"
    />
    <div class="warning-wrapper">
        <transition name="base-warning-transition">
            <base-warning
                v-show="isFailed"
            >
                Auth failed! Try again.
            </base-warning>
        </transition>
    </div>
</template>

<script lang="ts" setup>
import BaseButton from "@/components/UI/BaseButton"
import { defineProps, defineEmits } from "vue"
import BaseWarning from "@/components/UI/BaseWarning"
import BaseNotification from "@/components/UI/BaseNotification"

defineProps({
    isFailed: {
        type: Boolean,
        default: false
    },
    notification: String
})

const emits = defineEmits(["setConnection", "clearNotification"])

function setConnection() {
    emits("setConnection")
}
function clearNotification() {
    emits("clearNotification")
}
</script>

<style lang="scss" scoped>
.warning-wrapper {
    height: 20px;
    margin-top: 15px;
}

.base-warning-transition-item {
    display: inline-block;
}
.base-warning-transition-leave-active {
    position: absolute;
}
.base-warning-transition-enter-active,
.base-warning-transition-leave-active {
    transition: all .7s ease;
}
.base-warning-transition-enter-from,
.base-warning-transition-leave-to {
    opacity: 0;
    transform: translateY(-30px);
}
</style>