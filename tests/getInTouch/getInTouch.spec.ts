import { test, expect } from '@fixtures/pages.fixture'

test.describe("Visit Get in touch page for Protas", ()=>{
        test('Validate Get in touch page is present', async ({ getInTouchPage }) => {
        await getInTouchPage.goto()
        await expect(getInTouchPage.headerModuleHeading).toContainText('Get in touch')
        await expect(getInTouchPage.headerModuleContent).toContainText('By transforming the quality and feasibility of clinical trials, we are enabling the development of innovative treatments for major causes of poor health.')
    })
})