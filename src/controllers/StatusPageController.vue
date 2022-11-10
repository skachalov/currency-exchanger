<template>
    <status-page
        :link="link"
        :hash="route.params.hash"
        :status="transactionStatus"
        @redirectWalletPage="redirectWalletPage"
    />
</template>

<script setup>
import StatusPage from "@/pages/StatusPage"
import { ref, onMounted } from "vue"
import { useRoute, useRouter } from "vue-router"
import { GOERLI_ETHERSCAN } from "@/const/URL"
import StatusParserFactory from "@/helpers/StatusParser/StatusParserFactory"
import { ParserType } from "@/helpers/StatusParser/ParserType"

const route = useRoute()
const router = useRouter()

let link = ref(GOERLI_ETHERSCAN)
let transactionStatus = ref("Loading")

onMounted(async () => {
    link.value += route.params.hash
    const statusParser = StatusParserFactory.GetStatusParser(ParserType.GoerliEtherscan)

    transactionStatus.value = await statusParser.GetStatus(link.value)

    const interval = setInterval(async () => {
        if (statusParser.GetPossibleResultStatuses().indexOf(transactionStatus.value) === -1) {
            transactionStatus.value = await statusParser.GetStatus(link.value)
        }
        else {
            clearInterval(interval)
        }
    }, 1000)
})

function redirectWalletPage() {
    router.push("/wallet")
}
</script>

<style scoped>

</style>