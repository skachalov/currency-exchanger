<template>
    <div class="base-button-container">
        <button :class="classes" >
            <component
                v-if="className === 'big'"
                :is="BaseButtonTitleBig"
                :title="title"
            />
            <fa v-else :icon="iconName" />
        </button>
        <component
            v-if="className === 'small'"
            :is="BaseButtonTitleSmall"
            :title="title"
        />
    </div>
</template>

<script lang="ts" setup>
import { defineProps, computed } from "vue"
import BaseButtonTitleSmall from "@/components/UI/BaseButtonTitleSmall.vue"
import BaseButtonTitleBig from "@/components/UI/BaseButtonTitleBig.vue"

const props = defineProps({
    title: String,
    iconName: String,
    className: {
        type: String,
        default: "small"
    }
})

const classes = computed(() => {
    return ["base-button", props.className]
})
</script>

<style lang="scss" scoped>
.base-button-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.base-button {
    background-color: $base3;
    color: $base1;
    border: none;
    cursor: pointer;
    transition: .2s;
}
body.light-theme .base-button {
    color: $base1Light;
}

.small {
    font-size: 18px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
}
.big {
    width: 400px;
    height: 150px;
    border-radius: 20px;
    font-size: 36px;
}
.small:hover {
    font-size: 24px;
    transform: rotateZ(45deg);
}
.big:hover {
    font-size: 42px;
}
</style>