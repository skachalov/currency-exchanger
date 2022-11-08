<template>
    <input
        class="base-input"
        :value="modelValue"
        @input="updateModelValue"
    />
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from "vue"

defineProps({
    modelValue: String
})

const emits = defineEmits(["update:modelValue"])

function updateModelValue(event: any) {
    emits("update:modelValue", event.target.value)
}
</script>

<style lang="scss" scoped>
.base-input {
    padding: 10px 15px;
    background-color: $base0;
    border: none;
    color: $base2;
    border-radius: 10px;
    outline: none;
    margin-bottom: 15px;
    width: 300px;
}
</style>