<template>
    <div class="base-input-container">
        <base-title-row :title="title" />
        <input
            class="base-input"
            :value="inputValue"
            @input="updateInputValue"
            placeholder="Input..."
        />
        <transition name="base-warning-transition">
            <base-warning
                style="margin-top: 5px"
                v-show="error"
            >
                {{ errorText }}
            </base-warning>
        </transition>
    </div>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from "vue"
import BaseWarning from "@/components/UI/BaseWarning"
import BaseTitleRow from "@/components/UI/BaseTitleRow.vue";

const props = defineProps({
    inputValue: String,
    title: String,
    error: {
        type: Boolean,
        default: false
    },
    errorText: String
})

const emits = defineEmits(["updateInputValue"])

function updateInputValue(event: any) {
    emits("updateInputValue", event.target.value, props.title)
}
</script>

<style lang="scss" scoped>
.base-input-container {
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 80px;
}

.base-input {
    margin-top: 5px;
    padding: 10px 15px;
    background-color: $base0;
    border: none;
    color: $base2;
    border-radius: 10px;
    outline: none;
    width: 400px;
    justify-self: start;
}

.base-warning-transition-item {
    display: inline-block;
}
.base-warning-transition-enter-active,
.base-warning-transition-leave-active {
    transition: all .7s ease;
}
.base-warning-transition-enter-from,
.base-warning-transition-leave-to {
    opacity: 0;
    transform: translateY(-10px);
}
</style>