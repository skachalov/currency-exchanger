import { WalletType } from "@/helpers/WalletConnection/WalletType"
import MetaMaskConnection from "@/helpers/WalletConnection/MetaMaskConnection"
import printError from "@/helpers/printError"

export default class ConnectionFactory {
    static GetWalletConnection(walletType: WalletType): any {
        switch (walletType) {
            case (WalletType.MetaMask): {
                return new MetaMaskConnection()
            }
            default: {
                printError("This type of network didn't exist")
            }
        }
    }
}