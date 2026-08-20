import { type Locator, type Page} from "playwright"

export class WhatWeDoPage {
    readonly page: Page
    readonly headerModuleHeading: Locator
    readonly headerModuleContent: Locator
    readonly ceoImage: Locator

    constructor(page:Page) {
        this.page = page
        this.headerModuleHeading = page.locator('.page-header-module__heading')
        this.headerModuleContent = page.locator('.page-header-module__content')
        this.ceoImage = page.locator('.quote-image > img')
    }

    async goto(){
        await this.page.goto(process.env.BASE_URL+'what-we-do/')
    }
}