import { ParserType } from "@/helpers/StatusParser/ParserType"
import printError from "@/helpers/printError"
import StatusParserGoerliEtherscan from "@/helpers/StatusParser/StatusParserGoerliEtherscan"
import notificationConstructor from "@/helpers/notificationConstructor";

export default class StatusParserFactory {
    static GetStatusParser(parserType: ParserType): any {
        switch (parserType) {
            case (ParserType.GOERLI_ETHERSCAN): {
                return notificationConstructor(1, new StatusParserGoerliEtherscan())
            }
            default: {
                return notificationConstructor(-1,"Parser didn't work with this web site")
            }
        }
    }
}