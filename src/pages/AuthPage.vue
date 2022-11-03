<template>
    <div id="auth-page-container">
        <div id="auth-btn-wrapper">
            <auth-button @click="setConnection" />
            <base-warning
                v-if="isFailed"
                style="margin-top: 15px"
            >
                Auth failed! Try again.
            </base-warning>
        </div>
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
#auth-page-container {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

#auth-btn-wrapper {
    height: 500px;
    width: 800px;
    background-color: $base1;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>