import {providers} from "ethers"

export default abstract class WalletConnection {
    provider: any

    abstract getProvider(): any

    abstract getAccount(): Promise<string>

    abstract getSigner(): providers.JsonRpcSigner

    abstract getBalance(address: string): Promise<string>

    abstract getNetwork(): Promise<providers.Network>

    abstract getGasPrice(): Promise<any>
}