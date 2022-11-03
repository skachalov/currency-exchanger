import { ethers } from "ethers"

export default class MetaMaskConnection extends WalletConnection {
    getProvider(): any {
        if (!this.provider) {
            this.provider = new ethers.providers.Web3Provider(window.etherium)
        }

        return this.provider
    }

    getAccount(): void {
        this.getProvider().send("eth_requestAccounts", [])
    }
}