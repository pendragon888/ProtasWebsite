import { test, expect } from '@fixtures/pages.fixture'

test.describe("Visit search page for Protas", ()=>{
    test.beforeEach(async ({ searchPage }) => {
        await searchPage.goto()
    })

    test('Validate search is present', async ({ searchPage }) => {
        await expect(searchPage.directToSearchHeading).toBeVisible()
        await expect(searchPage.searchBox).toBeVisible()
    })

    test('Search for RCTs and verify results', async ({ searchPage, page }) => {
        await expect(searchPage.searchBox).toBeVisible()
        await expect(searchPage.searchBox).toBeEmpty()
        await searchPage.searchBox.fill('RCTs')
        await searchPage.searchButton.click()

        // search result
        await expect(searchPage.searchHeading).toContainText('3 search results: RCTs')
        await expect(searchPage.searchResults).toHaveCount(3)
    })
})