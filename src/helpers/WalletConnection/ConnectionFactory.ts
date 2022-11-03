import { WalletType } from "@/helpers/WalletConnection/WalletType"
import MetaMaskConnection from "@/helpers/WalletConnection/MetaMaskConnection"

export default class ConnectionFactory {
    static GetWalletConnection(walletType: WalletType) {
        switch (walletType) {
            case (WalletType.MetaMask): {
                return new MetaMaskConnection()
            }
            default: {
                throw new Error()
            }
        }
    }
}