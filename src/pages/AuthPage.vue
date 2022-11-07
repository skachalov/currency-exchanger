<template>
    <div id="auth-page-container">
        <div id="auth-wrapper">
            <base-button @click="setConnection" />
            <div class="warning-wrapper">
                <transition name="base-warning-transition">
                    <base-warning
                        v-show="isFailed"
                    >
                        Auth failed! Try it again.
                    </base-warning>
                </transition>
            </div>
        </div>
    </div>
</template>

<script setup>
import BaseButton from "@/components/UI/BaseButton"
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
#auth-page-container {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

#auth-wrapper {
    width: 800px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

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