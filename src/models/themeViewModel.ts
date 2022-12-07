import LocalStorageRepository from "@/services/localStorageRepository"

class ThemeViewModel {
    themeRepository: LocalStorageRepository

    constructor() {
        this.themeRepository = new LocalStorageRepository()
    }

    getIsLightTheme() {
        return this.themeRepository.getTheme() === "light"
    }

    switchTheme() {
        this.themeRepository.switchTheme()
    }
}

export const themeVM = new ThemeViewModel()