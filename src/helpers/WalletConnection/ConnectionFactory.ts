import { WalletType } from "@/helpers/WalletConnection/WalletType"
import MetaMaskConnection from "@/helpers/WalletConnection/MetaMaskConnection"
import notificationConstructor from "@/helpers/notificationConstructor"

export default class ConnectionFactory {
    static GetWalletConnection(walletType: WalletType): any {
        switch (walletType) {
            case (WalletType.META_MASK): {
                return notificationConstructor(1, new MetaMaskConnection())
            }
            default: {
                return notificationConstructor(-1, "This type of network didn't exist")
            }
        }
    }
}