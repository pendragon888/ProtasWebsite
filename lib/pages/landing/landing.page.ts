import { type Locator, type Page} from "playwright"

export class LandingPage {
    readonly page: Page
    readonly homeBannerHeading: Locator
    readonly homeBannerBody: Locator

    constructor(page:Page) {
        this.page = page
        this.homeBannerHeading = page.locator('h1')
        this.homeBannerBody = page.locator('#main')
    }

    async goto(){
        await this.page.goto(process.env.BASE_URL!)
    }
}