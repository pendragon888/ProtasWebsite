import { test, expect } from '@fixtures/pages.fixture'

test.describe("Visit Work at Protas page for Protas", ()=>{
        test('Validate Work at Protas page is present', async ({ workAtProtasPage }) => {
        await workAtProtasPage.goto()
        await expect(workAtProtasPage.headerModuleHeading).toContainText('Make a difference at Protas')
        await expect(workAtProtasPage.headerModuleContent).toContainText('We’re growing our organisation and looking for motivated people to help us make a positive impact on the world. Work with a mission-led team that has decades of experience and a proven track record in designing and delivering landmark clinical trials.')
    })
})