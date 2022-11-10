<template>
    <div
        class="base-status"
        :class="{ 'success': className === txStatus.Success,
                  'fail': className === txStatus.Fail,
                  'loading': className === txStatus.Loading }"
    >
        <fa :icon="getIconName" />
        {{status}}
    </div>
</template>

<script lang="ts" setup>
import { defineProps, computed } from "vue"
import txStatus from "@/const/txStatus"

const props = defineProps({
    status: {
        type: String,
        default: txStatus.Loading
    }
})

const className = computed(() => {
    if ([txStatus.Success, txStatus.Fail].indexOf(props.status) === -1) {
        return txStatus.Loading
    }
    return props.status
})
const getIconName = computed(() => {
    switch (className.value) {
        case (txStatus.Success):
            return "check"
        case (txStatus.Fail):
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
.loading {
    background-color: $waiting;
}
.success {
    background-color: $success;
}
.fail {
    background-color: $warn;
}
</style>