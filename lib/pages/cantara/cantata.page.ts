import { type Locator, type Page} from "playwright"

export class CantataPage {
    readonly page: Page
    readonly headerModuleHeading: Locator
    readonly headerModuleContent: Locator
    readonly headerModuleImage: Locator

    constructor(page:Page) {
        this.page = page
        this.headerModuleHeading = page.locator('.cantata_page_header_module__heading')
        this.headerModuleContent = page.locator('.cantata_page_header_module__body')
        this.headerModuleImage = page.locator('.cantata_page_header_module__image')
    }

    async goto(){
        await this.page.goto(process.env.BASE_URL+'cantata/')
    }
}