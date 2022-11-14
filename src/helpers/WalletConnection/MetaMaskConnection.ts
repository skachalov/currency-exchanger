import { ethers, providers } from "ethers"
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

    getSigner(): providers.JsonRpcSigner {
        return this.getProvider().getSigner()
    }

    async getBalance(address: string): Promise<string> {
        return await this.getProvider().getBalance(address)
    }

    async getNetwork(): Promise<providers.Network> {
        return await this.getProvider().getNetwork()
    }

    async getGasPrice(): Promise<ethers.BigNumber> {
        return await this.getProvider().getGasPrice()
    }
}