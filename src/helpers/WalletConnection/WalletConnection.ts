abstract class WalletConnection {
    provider: any

    abstract getProvider(): any

    abstract getAccount(): void
}
