export default class TransferValidator {
    static ValidateAddress(address: string, yourAddress: string): boolean {
        return address.length > 0 && address !== yourAddress
    }

    static ValidateAmount(amount: string, yourBalance: string): boolean {
        yourBalance = "2.3"
        const checkForZeroAmount = (_amount: string) =>
            _amount.split('.').map(a => Number(a)).filter(a => a !== 0).length !== 0

        console.log(amount, yourBalance)

        try {
            return amount.length > 0 && amount.split(".").length === 2
                && checkForZeroAmount(amount) && amount <= yourBalance
        }
        catch {
            return false
        }
    }
}