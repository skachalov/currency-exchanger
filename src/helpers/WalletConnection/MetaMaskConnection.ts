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

    getSigner(): any {
        return this.getProvider().getSigner()
    }

    async getBalance(address: string): Promise<string> {
        return await this.getProvider().getBalance(address)
    }

    async getNetwork(): Promise<any> {
        return await this.getProvider().getNetwork()
    }

    async getGasPrice(): Promise<any> {
        return await this.getProvider().getGasPrice()
    }
}