<template>
    <div class="base-header">
        <router-link
            to="/wallet"
            class="title"
        >
            CURRENCY-EXCHANGER
        </router-link>
    </div>
</template>

<style lang="scss" scoped>
.base-header {
    width: 100%;
    position: absolute;
    font-family: "Gilroy ExtraBold";
    display: flex;
    justify-content: center;
    padding: 15px 0;
    background-color: $base0;
}
.title {
    color: $base2;
    font-size: 24px;
    text-decoration: none;
}
</style>