# Playwright Testing for Protas' Website

This Playwright automation test framework uses TypeScript to automate [Protas](https://protas.co.uk/)

## Aim/Goals
- Develop Playwright automation framework using TypeScript.
- Demonstrate use of POM (Page Object Model) to show readable, maintainable and scalable code.
- Create UI tests to verify core webpages are present and functional.
- Create API tests to verify status, save payload and compare against UI.
- Initialise setup tests to run first, confirming environment is ready before running remaining automation tests.
- Perform tests against a variety of web browsers and mobile viewports.
- Integrate CI/CD workflow using GitHub Actions.
- Raise areas of website improvements.
- Development timeboxed to one working week.

## Setup Instructions

Steps on how to install dependencies and execute the tests.

1. Ensure the following are installed:
   - [Node.js](https://nodejs.org/) (v18 or higher)
   - [npm](https://www.npmjs.com/)
   - [Git](https://git-scm.com/)

2. Clone this [repository](https://github.com/pendragon888/ProtasWebsite) into your local machine using the terminal (Mac), CMD (Windows), or a GUI tool like SourceTree.

3. Install the node dependencies:

    ```bash
    npm install
    npm install dotenv
    ```
4. To install the playwright browsers:

    ```bash
    npx playwright install
    ```

5. To run all the tests in the directory:

    ```bash
    npx playwright test
    ```


    or to see tests in UI mode
    ```bash
    npx playwright test --ui
    ```

6. To run tests from a specific spec file:

    ```bash
    npx playwright test getInTouch.spec.ts
    ```



## Testing Framework Developed By

**Kevin D**

QA Automation Engineer
