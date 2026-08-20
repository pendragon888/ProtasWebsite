import { test, expect } from '@fixtures/pages.fixture'

test.describe("Search from navigation", ()=>{
        test('Validate search from navigation', async ({ navigationPage, searchPage }) => {
        await navigationPage.goto()
        await navigationPage.navToSearch.click()
        await expect(navigationPage.navSearchTextbox).toBeVisible()
        await navigationPage.navSearchTextbox.fill('Protas')
        await navigationPage.navSearchButton.click()

        await expect(searchPage.searchHeading).toBeVisible()
        await expect(searchPage.searchHeading).toContainText('73 search results: Protas')
    })
})