import { ethers } from "ethers"
import WalletConnection from "@/helpers/WalletConnection/WalletConnection"

export default class MetaMaskConnection extends WalletConnection {
    getProvider(): any {
        if (!this.provider) {
            this.provider = new ethers.providers.Web3Provider(window.ethereum)
        }

        return this.provider
    }

    async getAccount(): Promise<string> {
        return await this.getProvider().send("eth_requestAccounts", [])
    }
}