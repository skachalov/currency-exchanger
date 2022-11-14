<template>
    <status-page
        :link="link"
        :hash="route.params.hash"
        :status="transactionStatus"
        :notification="notification"
        @redirectWalletPage="redirectWalletPage"
        @clearNotification="clearNotification"
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
let notification = ref("")

onMounted(async () => {
    link.value += route.params.hash

    let statusParser = StatusParserFactory.GetStatusParser(ParserType.GOERLI_ETHERSCAN)

    if (statusParser.status === -1) {
        notification.value = statusParser.description
        return
    }

    statusParser = statusParser.description
    transactionStatus.value = await getStatus(statusParser)

    const interval = setInterval(async () => {
        if (statusParser.GetPossibleResultStatuses().indexOf(transactionStatus.value) === -1
            && transactionStatus.value !== txStatus.ERROR) {
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

function clearNotification() {
    notification.value = ""
}

function redirectWalletPage() {
    router.push("/wallet")
}
</script>