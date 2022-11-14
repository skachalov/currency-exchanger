<template>
    <AppController />
</template>

<script setup>
import AppController from "@/controllers/AppController"
</script>

<style lang="scss">
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        transition: background-color .2s;
    }

    html, body, #app {
        height: 100%;
    }

    #app {
        background-color: $bg;
    }

    body.light-theme #app {
        background-color: $bgLight;
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