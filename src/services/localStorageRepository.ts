export default class LocalStorageRepository {
    constructor() {
        if (this.getTheme() == null) {
            localStorage.setItem("theme", "dark")
        }
    }

    getTheme() {
        return localStorage.getItem("theme")
    }

    setTheme(theme: string) {
        localStorage.setItem("theme", theme)
    }

    switchTheme() {
        const theme = this.getTheme()
        this.setTheme(theme === "dark" ? "light" : "dark")
    }
}