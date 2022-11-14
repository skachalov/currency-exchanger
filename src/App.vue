<template>
    <div id="app-container">
        <base-theme />
        <div id="app-wrapper">
            <base-header />
            <div id="app-wrapper-content">
                <AppLayout />
            </div>
        </div>
    </div>
</template>

<script setup>
import BaseTheme from "@/components/UI/BaseTheme"
import BaseHeader from "@/components/UI/BaseHeader"
import AppLayout from "@/components/AppLayout"
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

    #app-container {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #app-wrapper {
        position: relative;
        width: 800px;
        height: 500px;
        color: $base2;
        border-radius: 20px;
        background-color: $base1;
        overflow: hidden;
    }

    body.light-theme #app-wrapper {
        color: $base2Light;
        background-color: $base1Light;
    }

    #app-wrapper-content {
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
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