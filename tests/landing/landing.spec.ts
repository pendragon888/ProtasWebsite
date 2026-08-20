import { test, expect } from '@fixtures/pages.fixture'

test.describe("Visit landing page for Protas", ()=>{

    test('Validate Landing page present', async ({ landingPage, page }) => {
        await landingPage.goto()
        await expect (landingPage.homeBannerHeading).toBeVisible()
        await expect (landingPage.homeBannerHeading).toContainText('Smarter trials for better health')
        await expect (landingPage.homeBannerBody).toBeVisible()
        await expect (landingPage.homeBannerBody).toContainText('We’re changing the face of clinical trials. Through smart trial design and delivery, effective use of data and technology, and collaborative policy development, we’re enabling trials to become the much-needed solution to some of the world’s biggest health problems.')
   })
})