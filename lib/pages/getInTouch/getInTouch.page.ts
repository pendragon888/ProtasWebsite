import { type Locator, type Page} from "playwright"

export class GetInTouchPage {
    readonly page: Page
    readonly headerModuleHeading: Locator
    readonly headerModuleContent: Locator

    constructor(page:Page) {
        this.page = page
        this.headerModuleHeading = page.locator('.page-header-module__heading')
        this.headerModuleContent = page.locator('.page-header-module__content')
    }

    async goto(){
        await this.page.goto(process.env.BASE_URL+'get-in-touch/')
    }
}