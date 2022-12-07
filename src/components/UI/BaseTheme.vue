<template>
    <div
        class="base-theme"
        @click="switchTheme"
    >
        <fa v-if="!isLight" icon="moon" />
        <fa v-else icon="sun" />
    </div>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from "vue"

defineProps({
    isLight: Boolean
})

const emits = defineEmits(["switchTheme"])

function switchTheme() {
    emits("switchTheme")
}
</script>

<style lang="scss" scoped>
.base-theme {
    font-size: 32px;
    color: $base2;
    position: fixed;
    width: 50px;
    height: 50px;
    top: 10px;
    right: 20px;
    cursor: pointer;
    transition: .2s;
    display: flex;
    justify-content: center;
    align-items: center;
}

body.light-theme .base-theme {
    color: $base2Light;
}

.base-theme:hover {
    transform: scale(115%);
}
</style>