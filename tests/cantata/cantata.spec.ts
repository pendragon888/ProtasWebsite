import { test, expect } from '@fixtures/pages.fixture'

test.describe("Visit cantata for Protas", ()=>{
        test('Validate cantata page is present', async ({ cantataPage }) => {
        await cantataPage.goto()
        await expect(cantataPage.headerModuleHeading).toContainText('Unlocking the power of seamless trial management')
        await expect(cantataPage.headerModuleContent).toContainText('Integrated technology is fundamental to the success of our clinical trials. Based on extensively tried-and-tested trial management technology, we built Cantata to provide a unified platform that supports the full breadth of trial activities within a single system. It means trials are managed safely and seamlessly, which improves the quality of results and overall experience, while reducing cost.')
        await expect(cantataPage.headerModuleImage).toBeVisible()
    })
})