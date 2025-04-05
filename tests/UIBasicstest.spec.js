const {test, expect} = require('@playwright/test');
test('browser context playwright test ', {
   tag: '@xyz'
 }, async ({browser}) =>
{
   //chrome
   const context = await browser.newContext();
   const page= await context.newPage();
   await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
   console.log(await page.title());
      await expect(page).toHaveTitle("Google");
});

test(' @xyz page playwright test', async ({page}) =>
   {
      //chrome
      await page.goto('https://playwright.dev/');
      //get title---> assertion
      console.log(await page.title());
      await expect(page).toHaveTitle("Fast and reliable end-to-end testing for modern web apps | Playwright");
   
   });