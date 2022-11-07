<template>
    <div class="base-loader" />
</template>

<style lang="scss" scoped>
.base-loader {
    border: 8px solid $base1;
    border-top: 8px solid $base3;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    animation: loader 2s linear infinite;
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