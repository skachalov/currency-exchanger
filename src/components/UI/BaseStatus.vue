<template>
    <div :class="classes" >
        <fa :icon="getIconName" />
        {{ status }}
    </div>
</template>

<script lang="ts" setup>
import { defineProps, computed } from "vue"
import txStatus from "@/const/txStatus"

const props = defineProps({
    status: {
        type: String,
        default: "Loading"
    }
})

const classes = computed(() => {
    const classes = ["base-status"]

    if ([txStatus.SUCCESS, txStatus.FAIL, txStatus.ERROR].indexOf(props.status) === -1) {
        return [...classes, txStatus.LOADING.toLowerCase()]
    }
    return [...classes, props.status?.toLowerCase()]
})
const getIconName = computed(() => {
    switch (classes.value[1]) {
        case (txStatus.SUCCESS.toLowerCase()):
            return "check"
        case (txStatus.FAIL.toLowerCase()):
            return "xmark"
        case (txStatus.ERROR.toLowerCase()):
            return "xmark"
        default:
            return "circle"
    }
})
</script>

<style lang="scss" scoped>
.base-status {
    width: 130px;
    padding: 7px 10px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 10px;
    color: $base1;
    font-family: "Gilroy ExtraBold";
}
body.light-theme .base-status {
    color: $base1Light;
}
.loading {
    background-color: $waiting;
}
body.light-theme .loading {
    background-color: $waitingLight;
}
.success {
    background-color: $success;
}
body.light-theme .success {
    background-color: $successLight;
}
.fail, .error {
    background-color: $warn;
}
</style>