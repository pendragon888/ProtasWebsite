import { NavigationPage } from "@pages/navigation/navigation.page";
import { LandingPage } from "@pages/landing/landing.page";
import { WhatWeDoPage } from "@pages/whatWeDo/whatWeDo.page";
import { CantataPage } from "@pages/cantara/cantata.page";
import { OurPeoplePage } from "@pages/ourPeople/ourPeople.page";
import { NewsAndInsightsPage } from "@pages/newsAndInsights/newsAndInsights.page";
import { WorkAtProtasPage } from "@pages/workAtProtas/workAtProtas.page";
import { GetInTouchPage } from "@pages/getInTouch/getInTouch.page";
import { SearchPage } from "@pages/search/search.page";
import { test as baseTest } from "@playwright/test";

type MyPages = {
    navigationPage: NavigationPage;
    landingPage: LandingPage;
    whatWeDoPage: WhatWeDoPage;
    cantataPage: CantataPage;
    ourPeoplePage: OurPeoplePage;
    newsAndInsightsPage: NewsAndInsightsPage;
    workAtProtasPage: WorkAtProtasPage;
    searchPage: SearchPage;
    getInTouchPage: GetInTouchPage;
};

export const test = baseTest.extend<MyPages>({
    navigationPage: async ({ page }, use) => {
    await use(new NavigationPage(page));
  },
    landingPage: async ({ page }, use) => {
    await use(new LandingPage(page));
  },
    whatWeDoPage: async ({ page }, use) => {
    await use(new WhatWeDoPage(page));
  },
    cantataPage: async ({ page }, use) => {
    await use(new CantataPage(page));
  },
    ourPeoplePage: async ({ page }, use) => {
    await use(new OurPeoplePage(page));
  },
    newsAndInsightsPage: async ({ page }, use) => {
    await use(new NewsAndInsightsPage(page));
  },
    workAtProtasPage: async ({ page }, use) => {
    await use(new WorkAtProtasPage(page));
  },
    searchPage: async ({ page }, use) => {
    await use(new SearchPage(page));
  },
    getInTouchPage: async ({ page }, use) => {
    await use(new GetInTouchPage(page));
  },
});

export { expect } from "@playwright/test";