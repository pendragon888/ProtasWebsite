import { test, expect } from '@fixtures/pages.fixture'
import { formData } from '@datafactory/enquiryData.json'

test.describe("Visit Get in touch page for Protas", ()=>{
    test.beforeEach(async ({ getInTouchPage }) => {
        await getInTouchPage.goto()
    })

    test('Validate Get in touch page is present', async ({ getInTouchPage }) => {
        await expect(getInTouchPage.headerModuleHeading).toContainText('Get in touch')
        await expect(getInTouchPage.headerModuleContent).toContainText('By transforming the quality and feasibility of clinical trials, we are enabling the development of innovative treatments for major causes of poor health.')
    })

    test('Check enquiry validation messages are shown', async ({ getInTouchPage }) => {
        await getInTouchPage.firstName.clear()
        await getInTouchPage.submit.click()
        await expect (getInTouchPage.validationError).toBeVisible()
        await expect (getInTouchPage.validationError).toContainText('There was a problem with your submission. Please review the fields below.')
    })

    test('Fill out enquiry form', async ({ getInTouchPage }) => {
        await expect (getInTouchPage.firstName).toBeVisible()
        await getInTouchPage.firstName.fill(formData.firstName)
        await getInTouchPage.surname.fill(formData.surname)
        await getInTouchPage.email.fill(formData.email)
        await getInTouchPage.phone.fill(formData.phone)
        await getInTouchPage.sector.selectOption(formData.sector)
        await getInTouchPage.country.selectOption(formData.country)
        await getInTouchPage.reason.selectOption(formData.reasonForEnquiry)
        await getInTouchPage.message.fill(formData.message)
        await getInTouchPage.consent.check()
        // Do not submit due to production environment
    })
})