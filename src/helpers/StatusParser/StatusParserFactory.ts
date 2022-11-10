import { ParserType } from "@/helpers/StatusParser/ParserType"
import printError from "@/helpers/printError"
import StatusParserGoerliEtherscan from "@/helpers/StatusParser/StatusParserGoerliEtherscan"

export default class StatusParserFactory {
    static GetStatusParser(parserType: ParserType): any {
        switch (parserType) {
            case (ParserType.GoerliEtherscan): {
                return new StatusParserGoerliEtherscan()
            }
            default: {
                printError("Parser didn't work with this web site")
            }
        }
    }
}