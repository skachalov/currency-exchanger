<template>
    <div class="base-loader">
        <div class="loader" />
        <div class="loader-warning">
            <slot />
        </div>
    </div>
</template>

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

.loader-warning {
    margin-top: 15px;
    color: $base2;
    font-family: "Gilroy Regular";
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