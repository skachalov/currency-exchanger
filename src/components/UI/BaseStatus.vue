<template>
    <div
        class="base-status"
        :class="{ 'success': className === 'success',
                  'fail': className === 'fail',
                  'waiting': className === 'waiting' }"
    >
        <fa :icon="getIconName" />
        {{status}}
    </div>
</template>

<script lang="ts" setup>
import { defineProps, ref, computed } from "vue"

const props = defineProps({
    status: {
        type: String,
        default: "Loading"
    }
})

const className = computed(() => {
    if (["Success", "Fail"].indexOf(props.status) === -1) {
        return "waiting"
    }
    return props.status.toLowerCase()
})
const getIconName = computed(() => {
    switch (className.value) {
        case ("success"):
            return "check"
        case ("fail"):
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
.waiting {
    background-color: white;
}
.success {
    background-color: $success;
}
.fail {
    background-color: $waiting;
}
</style>