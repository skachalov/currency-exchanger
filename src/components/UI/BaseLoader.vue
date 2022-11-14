<template>
    <div class="base-loader">
        <div class="loader" />
        <div class="loader-warning">
            {{ warning + dots }}
        </div>
    </div>
</template>

<script lang="ts" setup>
import { defineProps, onMounted, ref } from "vue"

defineProps({
    warning: String
})

let dots = ref("")

onMounted(() => {
    setInterval(() => {
        dots.value = dots.value.length < 3
            ? dots.value + "."
            : ""
    }, 500)
})
</script>

<style lang="scss" scoped>
.base-loader {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.loader {
    border: 8px solid $base1;
    border-top: 8px solid $base3;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    animation: loader 2s linear infinite;
}
body.light-theme .loader {
    border: 8px solid $base1Light;
    border-top: 8px solid $base3;
}

.loader-warning {
    margin-top: 15px;
    color: $base2;
    font-family: "Gilroy Regular";
}
body.light-theme .loader-warning {
    color: $base2Light;
}

@keyframes loader {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>