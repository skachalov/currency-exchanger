export default abstract class StatusParser {
    statusSuccess = ""
    statusFail = ""

    ParseToDOM(pageData: string): HTMLDocument {
        return new DOMParser().parseFromString(pageData, "text/html")
    }

    abstract GetStatus(page: string): Promise<string>

    abstract GetPossibleResultStatuses(): Array<string>

    abstract ConvertStatus(status: string): string
}