<template>
    <div class="base-button-container">
        <template v-if="className === 'big'">
            <button class="base-button big">
                <h2>{{ title }}</h2>
            </button>
        </template>

        <template v-else>
            <button class="base-button small">
                <fa :icon="iconName" />
            </button>
            <div class="button-title">
                {{ title }}
            </div>
        </template>
    </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue"

defineProps({
    title: String,
    iconName: String,
    className: {
        type: String,
        default: "small"
    }
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
    border: none;
    cursor: pointer;
    transition: .2s;
}
.small {
    font-size: 18px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
}
.big {
    width: 400px;
    height: 150px;
    border-radius: 20px;
    font-size: 36px;
}
.button-title {
    font-family: "Gilroy Regular";
}
.small:hover {
    font-size: 24px;
    transform: rotateZ(45deg);
}
.big:hover {
    font-size: 42px;
}
</style>