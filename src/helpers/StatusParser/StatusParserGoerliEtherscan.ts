import StatusParser from "@/helpers/StatusParser/StatusParser"
import txStatus from "@/const/txStatus"
import { fetchGetGoerliEtherscan } from "@/services/API/getGoerliEtherscan"

export default class StatusParserGoerliEtherscan extends StatusParser {
    constructor() {
        super();
        this.statusSuccess = "Success"
        this.statusFail = "Fail"
    }

    async GetStatus(page: string): Promise<string> {
        try {
            const pageData = await fetchGetGoerliEtherscan(page)

            const dom = this.ParseToDOM(pageData.data)

            const statusElement =
                dom.querySelector("#ContentPlaceHolder1_maintable")

            let status = statusElement?.childNodes[7].childNodes[1].textContent

            status = status?.split(" ").filter(s => s !== "")[0]

            return status || ""
        }
        catch {
            return txStatus.Error
        }
    }

    GetPossibleResultStatuses(): Array<string> {
        return [this.statusSuccess, this.statusFail]
    }

    ConvertStatus(status: string): string {
        switch (status) {
            case (this.statusSuccess): {
                return txStatus.Success
            }
            case (this.statusFail): {
                return txStatus.Fail
            }
            default: {
                return status
            }
        }
    }
}