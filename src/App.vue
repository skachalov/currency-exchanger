<template>
    <div id="app-container">
        <div id="app-wrapper">
            <base-header />
            <div id="app-wrapper-content">
                <AppLayout />
            </div>
        </div>
    </div>
</template>

<script setup>
import BaseHeader from "@/components/UI/BaseHeader"
import AppLayout from "@/components/AppLayout"
</script>

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