import { test, expect } from '@fixtures/pages.fixture'

test.describe("Visit What we do page for Protas", ()=>{
        test('Validate What we do page is present', async ({ whatWeDoPage, page }) => {
        await whatWeDoPage.goto()
        await expect(whatWeDoPage.headerModuleHeading).toContainText('We’re enabling clinical trials to succeed')
        await expect(whatWeDoPage.headerModuleContent).toContainText('There is a pressing need for better ways to detect, prevent and treat common and life-threatening diseases, to save lives, improve health and relieve pressure on healthcare systems around the world. But large-scale, randomised controlled trials (RCTs) have become excessively complex and unsustainably expensive, failing to generate the evidence needed for sound decision making. That’s where we come in.')
        await expect(page.getByText('We launched as an independent not-for-profit in 2022 to drive change in clinical trials, specifically targeting common and life-threatening diseases because of the impact they have for millions of people worldwide.')).toBeVisible()
        await expect(whatWeDoPage.ceoImage).toBeVisible()
    })
})