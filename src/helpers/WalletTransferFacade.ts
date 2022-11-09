export default class WalletTransferFacade {
    static async TransferMoney(signer: any, transaction: any) {
        const t = await signer.sendTransaction(transaction)
        console.log(t)
    }
}