import ConnectionFactory from "@/helpers/WalletConnection/ConnectionFactory"
import { WalletType } from "@/helpers/WalletConnection/WalletType"
import { ethers } from "ethers"

export default class WalletDataFacade {
    static async GetWalletData(walletType: WalletType): Promise<any> {
        let connection = ConnectionFactory.GetWalletConnection(walletType)

        if (connection.status === -1) {
            return
        }

        connection = connection.description
        const signer = connection.getSigner()
        const network = await connection.getNetwork()
        const address = await signer.getAddress()
        const balance = await connection.getBalance(address)

        return {
            network: network.name,
            address,
            balance: ethers.utils.formatEther(balance)
        }
    }
}