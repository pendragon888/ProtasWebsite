import { type Locator, type Page} from "playwright"

export class GetInTouchPage {
    readonly page: Page
    readonly headerModuleHeading: Locator
    readonly headerModuleContent: Locator

    // Enquiry Fields
    readonly firstName: Locator
    readonly surname: Locator
    readonly email: Locator
    readonly phone: Locator
    readonly sector: Locator
    readonly country: Locator
    readonly reason: Locator
    readonly message: Locator
    readonly submit: Locator
    readonly consent: Locator
    readonly validationError: Locator

    constructor(page:Page) {
        this.page = page
        this.headerModuleHeading = page.locator('.page-header-module__heading')
        this.headerModuleContent = page.locator('.page-header-module__content')

        // Enquiry Fields
        this.firstName = page.getByRole('textbox', { name: 'First name' })
        this.surname = page.getByRole('textbox', { name: 'Surname' })
        this.email = page.getByRole('textbox', { name: 'Email' })
        this.phone = page.getByRole('textbox', { name: 'Phone' })
        this.sector = page.getByLabel('Sector(Required)')
        this.country = page.getByLabel('Country(Required)')
        this.reason = page.getByLabel('Reason for enquiry(Required)')
        this.message = page.getByRole('textbox', { name: 'Message' })
        this.consent = page.getByText('I agree to the privacy policy.')
        this.submit = page.getByRole('button', { name: 'Submit', exact: true })
        this.validationError = page.locator('#gform_2_validation_container')
    }

    async goto(){
        await this.page.goto(process.env.BASE_URL+'get-in-touch/')
    }
}