import StatusParser from "@/helpers/StatusParser/StatusParser"
import axios from "axios"
import txStatus from "@/const/txStatus"

export default class StatusParserGoerliEtherscan extends StatusParser {
    async GetStatus(page: string): Promise<string> {
        const pageData = await axios.get(page)

        const dom = this.ParseToDOM(pageData.data)

        const statusElement =
            dom.querySelector("#ContentPlaceHolder1_maintable")

        let status = statusElement?.childNodes[7].childNodes[1].textContent

        status = status?.split(" ").filter(s => s !== "")[0]

        return status || ""
    }

    GetPossibleResultStatuses(): Array<string> {
        return ["Success", "Fail"]
    }

    ConvertStatus(status: string): string {
        switch (status) {
            case ("Success"): {
                return txStatus.Success
            }
            case ("Fail"): {
                return txStatus.Fail
            }
            default: {
                return status
            }
        }
    }
}