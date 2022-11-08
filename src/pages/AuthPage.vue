<template>
    <auth-button @click="setConnection" />
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

<script setup>
import AuthButton from "@/components/AuthPage/AuthButton"
import { defineProps, defineEmits } from "vue"
import BaseWarning from "@/components/UI/BaseWarning"

defineProps({
    isFailed: {
        type: Boolean,
        default: false
    }
})

const emits = defineEmits(["setConnection"])

function setConnection() {
    emits("setConnection")
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