<template>
    <div class="base-button-container">
        <button class="base-button">
            <fa :icon="iconName" />
        </button>
        <div class="button-title">{{ title }}</div>
    </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue"

defineProps({
    title: String,
    iconName: String
})
</script>

<style lang="scss" scoped>
.base-button-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.base-button {
    background-color: $base3;
    color: $base1;
    font-size: 18px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: none;
    cursor: pointer;
}
.button-title {
    font-family: "Gilroy Regular";
}

.base-button:hover {
    background-color: rgba($base3, 0.95);
}
</style>