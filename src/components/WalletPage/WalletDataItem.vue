<template>
    <div class="wallet-data-item-wrapper">
        <base-title-row :title="title" />
        <div
            v-if="!toCopy"
            class="item-value"
        >
            {{ dataItem }}
        </div>

        <div
            v-else
            class="item-value"
        >
            <span
                style="cursor: pointer"
                @click="copy"
                @mouseover="isHovered = true"
                @mouseleave="mouseLeaveAction"
            >
                {{ dataItem }}
            </span>
            <transition name="helper-transition">
                <base-helper
                    v-if="isHovered"
                    :inner-text="innerText"
                    style="margin-top: 20px"
                />
            </transition>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, defineProps } from "vue"
import copyText from "@/helpers/copyText"
import BaseHelper from "@/components/UI/BaseHelper.vue"
import BaseTitleRow from "@/components/UI/BaseTitleRow.vue"

const props = defineProps({
    title: String,
    dataItem: String,
    toCopy: {
        type: Boolean,
        default: false
    }
})

const DEFAULT_INNER_TEXT = "Click to copy"
let innerText = ref(DEFAULT_INNER_TEXT)
let isHovered = ref(false)

function copy() {
    if (props.toCopy) {
        copyText(props.dataItem)
        innerText.value = "Copied!"
    }
}

function mouseLeaveAction() {
    isHovered.value = false
    innerText.value = DEFAULT_INNER_TEXT
}
</script>

<style scoped>
.wallet-data-item-wrapper {
    margin-top: 20px;
    display: flex;
    align-items: center;
    flex-direction: column;
}
.item-value {
    font-family: "Gilroy Regular";
    display: flex;
    justify-content: center;
}

.helper-transition-item {
    display: inline-block;
}
.helper-transition-enter-active,
.helper-transition-leave-active {
    transition: all .5s ease;
}
.helper-transition-enter-active {
    transition-delay: .1s;
}
.helper-transition-enter-from,
.helper-transition-leave-to {
    opacity: 0;
    transform: translateY(10px);
}
</style>