export default function printError(errorDescription: string) {
    console.log(errorDescription)
    return new Error()
}