<template>
    <div class="base-input-container">
        <div class="base-input-title">
            {{ title }}
        </div>
        <input
            class="base-input"
            :value="inputValue"
            @input="updateInputValue"
            placeholder="Input..."
        />
    </div>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from "vue"

defineProps({
    inputValue: String,
    title: String
})

const emits = defineEmits(["updateInputValue"])

function updateInputValue(event: any) {
    emits("updateInputValue", event.target.value)
}
</script>

<style lang="scss" scoped>
.base-input-container {
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.base-input-title {
    font-family: "Gilroy ExtraBold";
    font-size: 24px;
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
</style>