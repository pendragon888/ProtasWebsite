import { test, expect } from '@fixtures/pages.fixture'

test.describe("Visit Our people page for Protas", ()=>{
        test('Validate Our People page is present', async ({ ourPeoplePage }) => {
        await ourPeoplePage.goto()
        await expect(ourPeoplePage.headerModuleHeading).toContainText('Unparalleled knowledge and experience')
        await expect(ourPeoplePage.headerModuleContent).toContainText('Decades of experience in medical research, academia and corporate management allow us to expertly collaborate with our partners. Our team is committed to designing and delivering clinical trials that are smarter, cost effective and, ultimately, able to provide robust evidence to develop treatments for the most common illnesses affecting the world today.')
    })
})