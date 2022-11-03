export default abstract class WalletConnection {
    provider: any

    abstract getProvider(): any

    abstract getAccount(): Promise<void>
}
