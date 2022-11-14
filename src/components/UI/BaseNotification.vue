<template>
    <transition name="notification-transition">
        <div
            class="base-notification"
            v-if="currentNotification.length"
        >
            {{ currentNotification }}
        </div>
    </transition>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits, watch, ref } from "vue"

const props = defineProps({
    notification: {
        type: String,
        default: ""
    }
})

const currentNotification = ref("")
const emits = defineEmits(["clearNotification"])

watch(() => props.notification,
    () => {
        currentNotification.value = props.notification

        setTimeout(() => {
                currentNotification.value = ""
                emits("clearNotification")
            }, 3000
        )
})
</script>

<style lang="scss" scoped>
.base-notification {
    position: fixed;
    width: 250px;
    height: 70px;
    background-color: $base0;
    border-radius: 5px;
    left: 15px;
    top: 25%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Gilroy ExtraBold";
    padding: 10px 15px;
}

.notification-transition-item {
    display: inline-block;
}
.notification-transition-enter-active {
    transition: all .4s ease;
}
.notification-transition-leave-active {
    transition: all 1s ease;
}
.notification-transition-enter-from {
    opacity: 0;
    transform: translateX(-200px);
}
.notification-transition-leave-to {
    opacity: 0;
    transform: translateY(100px);
}
</style>