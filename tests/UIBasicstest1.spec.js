const {test, expect} = require('@playwright/test');
test(' @xyz browser context playwright test ', async ({browser}) =>
   {
      //chrome
      const context = await browser.newContext();
      const page= await context.newPage();
      await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
      console.log(await page.title());
       //LoginPage Practise | Rahul Shetty Academy
       await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy");
   });
test('page playwright test', async ({page}) =>
   {
      //chrome
      await page.goto('https://www.google.com.au/');
      //get title---> assertion
      console.log(await page.title());
      await expect(page).toHaveTitle("Google");
   
   });