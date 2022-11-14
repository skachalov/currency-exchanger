<template>
    <div id="app-container">
        <base-theme
            :is-light="isLight"
            @switchTheme="switchTheme"
        />
        <div id="app-wrapper">
            <base-header />
            <div id="app-wrapper-content">
                <AppLayout />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import BaseTheme from "@/components/UI/BaseTheme"
import BaseHeader from "@/components/UI/BaseHeader"
import AppLayout from "@/components/AppLayout"
import { themeVM } from "@/models/themeViewModel"
import { onMounted, ref } from "vue"

let isLight = ref(false)

onMounted(() => {
    if (themeVM.getIsLightTheme()) {
        document.body.classList.toggle("light-theme")
        isLight.value = true
    }
})

function switchTheme() {
    themeVM.switchTheme()
    document.body.classList.toggle("light-theme")
    isLight.value = !isLight.value
}
</script>

<style lang="scss">
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
</style>