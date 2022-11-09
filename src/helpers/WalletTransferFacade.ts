export default class WalletTransferFacade {
    static TransferMoney(to: string, amount: string) {
        console.log(
            `You transfer ${amount} eth to ${to}`
        )
    }
}