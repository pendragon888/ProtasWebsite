import { test, expect } from '@fixtures/pages.fixture'

test.describe("Visit News and insights page for Protas", ()=>{
        test('Validate News and insights page is present', async ({ newsAndInsightsPage }) => {
        await newsAndInsightsPage.goto()
        await expect(newsAndInsightsPage.headerModuleHeading).toContainText('The latest in smarter trials')
        await expect(newsAndInsightsPage.headerModuleContent).toContainText('As a not-for-profit, our mission is to enable whole-system change in clinical trials. This means sharing our approach and knowledge with our community. From news about Protas, our partnerships and trials, to advice and guidance, discover more about our world.')
    })
})