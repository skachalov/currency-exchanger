<template>
    <button
        class="base-button"
    >
        <h2>Login</h2>
    </button>
</template>

<style lang="scss" scoped>
.base-button {
    color: $base2;
    background-color: $base1;
    width: 400px;
    height: 150px;
    border: none;
    border-radius: 20px;
    cursor: pointer;
}
.base-button > h2 {
    font-size: 36px;
}

.base-button:hover {
    background-color: rgba($base1, 0.95);
}
</style>