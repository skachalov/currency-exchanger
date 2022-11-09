import printError from "@/helpers/printError"

export default class WalletTransferFacade {
    static async TransferMoney(signer: any, transaction: any) {
        try {
            const t = await signer.sendTransaction(transaction)
            return t.hash
        }
        catch {
            printError("Operation canceled")
            return -1
        }
    }
}