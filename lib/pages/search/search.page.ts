import { type Locator, type Page} from "playwright"

export class SearchPage {
    readonly page: Page
    readonly searchHeading: Locator
    readonly directToSearchHeading: Locator
    readonly searchBox: Locator
    readonly searchButton: Locator
    readonly searchResults: Locator


    constructor(page:Page) {
        this.page = page
        this.searchHeading = page.locator('h1')
        this.directToSearchHeading = page.getByRole('heading', { name: 'Please enter your search term' })
        this.searchBox = page.getByRole('searchbox', { name: 'Search' })
        this.searchButton = page.getByRole('search').getByRole('button', { name: 'Search' })
        this.searchResults = page.locator('.search-results__item')
    }

    async goto(){
        await this.page.goto(process.env.BASE_URL+'?s')
    }
}