<template>
    <router-view
        :key="$route.fullPath">
    </router-view>
</template>

<style>
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html, body, #app {
        height: 100%;
    }
</style>