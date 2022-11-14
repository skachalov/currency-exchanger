import notificationConstructor from "@/helpers/notificationConstructor";

export default class WalletTransferFacade {
    static async TransferMoney(signer: any, transaction: any) {
        try {
            const t = await signer.sendTransaction(transaction)
            return notificationConstructor(1, t.hash)
        }
        catch {
            return notificationConstructor(-1,  "Operation canceled")
        }
    }
}