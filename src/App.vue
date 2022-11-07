<template>
    <router-view
        :key="$route.fullPath">
    </router-view>
</template>

<style lang="scss">
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html, body, #app {
        height: 100%;
    }

    #app {
        background-color: $bg;
    }

    @font-face {
        font-family: "Gilroy ExtraBold";
        src: url("assets/fonts/gilroy-extrabold.ttf") format("truetype");
        font-style: normal;
        font-weight: normal;
    }

    @font-face {
        font-family: "Gilroy Regular";
        src: url("assets/fonts/gilroy-regular.ttf") format("truetype");
        font-style: normal;
        font-weight: normal;
    }
</style>