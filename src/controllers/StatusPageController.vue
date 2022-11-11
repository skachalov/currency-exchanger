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
import txStatus from "@/const/txStatus"

const route = useRoute()
const router = useRouter()

let link = ref(GOERLI_ETHERSCAN)
let transactionStatus = ref(txStatus.Loading)

onMounted(async () => {
    link.value += route.params.hash

    const statusParser = StatusParserFactory.GetStatusParser(ParserType.GoerliEtherscan)

    transactionStatus.value = await getStatus(statusParser)

    const interval = setInterval(async () => {
        if (statusParser.GetPossibleResultStatuses().indexOf(transactionStatus.value) === -1
            && transactionStatus.value !== txStatus.Error) {
            transactionStatus.value = await getStatus(statusParser)
        }
        else {
            clearInterval(interval)
        }
    }, 2000)
})

async function getStatus(statusParser) {
    return statusParser.ConvertStatus(await statusParser.GetStatus(link.value))
}

function redirectWalletPage() {
    router.push("/wallet")
}
</script>