import { type Locator, type Page } from "playwright"

export class NavigationPage {
    readonly page: Page
    readonly pageTitle: Locator
    //readonly navToLanding: Locator
    readonly navToWhatWeDo: Locator
    readonly navToCantata: Locator
    readonly navToOurPeople: Locator
    readonly navToNewsAndInsights: Locator
    readonly navToWorkAtProtas: Locator
    readonly navToSearch: Locator
    readonly navToGetInTouch: Locator

    constructor(page: Page) {
        this.page = page
        this.pageTitle = page.getByTestId('page-title')
        //this.navToLanding = page.getByRole('link', { name: '' })
        this.navToWhatWeDo = page.getByRole('link', { name: 'What we do' })
        this.navToCantata = page.getByRole('link', { name: 'Cantata' })
        this.navToOurPeople = page.getByRole('link', { name: 'Our people' })
        this.navToNewsAndInsights = page.getByRole('link', { name: 'News & Insights' })
        this.navToWorkAtProtas = page.getByRole('link', { name: 'Work at Protas' })
        this.navToSearch = page.getByRole('link', { name: 'Seach' })
        this.navToGetInTouch = page.getByRole('link', { name: 'Get in touch' })
    }

    async goto(){
        await this.page.goto(process.env.BASE_URL!)
    }
}