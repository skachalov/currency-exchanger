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
body.light-theme .base-header {
    background-color: $base0Light;
    color: $base2Light;
}
.title {
    color: $base2;
    font-size: 24px;
    text-decoration: none;
}
body.light-theme .title {
    color: $base2Light;
}
</style>