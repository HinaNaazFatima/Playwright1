const {test, expect} = require('@playwright/test');
test('Playwright Special Locators', async ({page}) =>
{
    await page.goto("https://rahulshettyacademy.com/angularpractice");
    await page.getByLabel("Check me out if you Love IceCreams!").click();
    await page.getByLabel("Employed").check();
    await page.pause();
    await page.getByLabel("Gender").selectOption('Female');
    await page.getByPlaceholder("Password").fill("@Aisha1983");
    await page.getByRole("button",{name :'Submit' }).click();
    await page.getByText("Success! The Form has been submitted successfully!.").isVisible();
    await page.getByRole("link",{name : 'Shop'}).click();
    await page.locator("app-card").filter({hasText:"Nokia Edge"}).getByRole("button").click();
});