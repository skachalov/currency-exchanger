<template>
    <button
        class="base-button"
    >
        <h2>Login</h2>
    </button>
</template>

<style lang="scss" scoped>
.base-button {
    color: $bg;
    background-color: $base2;
    width: 400px;
    height: 150px;
    border: none;
    border-radius: 20px;
    cursor: pointer;
}

.base-button:hover {
    background-color: rgba($base2, 0.95);
}
</style>