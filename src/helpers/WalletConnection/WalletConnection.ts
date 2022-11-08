export default abstract class WalletConnection {
    provider: any

    abstract getProvider(): any

    abstract getAccount(): Promise<string>

    abstract getSigner(): any

    abstract getBalance(address: string): Promise<string>

    abstract getNetwork(): Promise<any>
}
