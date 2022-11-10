<template>
    <component :is="layout">
        <router-view />
    </component>
</template>

<script lang="ts" setup>
import WalletPageController from "@/controllers/WalletPageController.vue"
import { ref, watch, markRaw } from "vue"
import { useRoute } from "vue-router"

const route = useRoute()
const layout = ref()

watch(() =>
        route.meta?.layout as string | undefined, async (metaLayout) => {
            try {
                const component = metaLayout && (await import(`@/controllers/${metaLayout}.vue`))
                layout.value = markRaw(component?.default || WalletPageController)
            } catch {
                layout.value = WalletPageController
            }
    },
    { immediate: true } )
</script>