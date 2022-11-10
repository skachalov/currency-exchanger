<template>
    <status-page
        :link="link"
        :hash="route.params.hash"
    />
</template>

<script setup>
import StatusPage from "@/pages/StatusPage"
import { ref, onMounted } from "vue"
import { useRoute, useRouter } from "vue-router"
import { GOERLI_ETHERSCAN } from "@/const/URL"

const route = useRoute()
const router = useRouter()

let link = ref(GOERLI_ETHERSCAN)

onMounted(() => {
    link.value += route.params.hash
})
</script>

<style scoped>

</style>