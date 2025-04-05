const {test, expect} = require('@playwright/test');
test('browser context playwright test ', async ({browser}) =>
   {
      const context = await browser.newContext();
      const page= await context.newPage();
      const userName = page.locator('#username');
      const signIn = page.locator('#signInBtn');
      const cardTitle = page.locator(".card-title a");
      //chrome
      
      await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
      console.log(await page.title());
       //LoginPage Practise | Rahul Shetty Academy
      await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy");
      await userName.fill("rahulShetty");
      await page.locator('[type="password"]').fill("learning");
      await signIn.click();
      console.log(await page.locator("div[style*='block']").textContent());
      await expect(await page.locator("div[style*='block']")).toContainText('Incorrect');
      
      await userName.fill("");
      await userName.fill("rahulshettyacademy");
      await signIn.click();
      console.log(await cardTitle.first().textContent());
      console.log(await cardTitle.nth(1).textContent());
      const allTitles= await cardTitle.allTextContents();//will not work if previousline isn't present
      console.log(allTitles);
   });

   test('playwright login Page', async ({page}) =>
      {
         const userEmail = page.locator('#userEmail');
         const logIn = page.locator('.login-btn');
         const cardTitle = page.locator(".card-body h5[style*='text-transform']");
         //chrome
         await page.goto('https://rahulshettyacademy.com/client');
         console.log(await page.title());
         await expect(page).toHaveTitle("Let's Shop");
         await userEmail.fill("rahulShetty.com");
         await page.locator('#userPassword').fill("@Aisha1983");
         await logIn.click();
         await page.waitForLoadState("networkidle");
         console.log(await page.locator(".invalid-feedback").textContent());
         await expect(await page.locator(".invalid-feedback")).toContainText('*Enter Valid Email');
         
         await userEmail.fill("");
         await userEmail.fill("hina.nazfatima@gmail.com");
         //await page.locator('#userPassword').fill("@Aisha1983");
         await logIn.click();
         //console.log(await cardTitle.first().textContent());
         //console.log(await cardTitle.nth(1).textContent());
         //await page.waitForLoadState("networkidle");
         await cardTitle.last().waitFor();
         const allTitles= await cardTitle.allTextContents();//will not work if previousline isn't present
         console.log(allTitles);
      });

      test('UI Controls', async ({page}) =>
         {
            const userEmail = page.locator('#userEmail');
            const logIn = page.locator('.login-btn');
            const cardTitle = page.locator(".card-body h5[style*='text-transform']");
            const Blink=page.locator("[href*=documents-request]");
            //chrome
            await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
            console.log(await page.title());
            const dropdown=page.locator("select.form-control");
            await dropdown.selectOption("consult");
            //await page.locator(".radiotextsty").last().click();
            await page.locator(".radiotextsty").nth(1).click();
            await page.locator("#okayBtn").click();
            await expect(page.locator(".radiotextsty").nth(1)).toBeChecked();
            console.log(await page.locator(".radiotextsty").nth(1).isChecked());
            
            await page.locator("#terms").click();
            expect(await page.locator("#terms")).toBeChecked();
            await page.locator("#terms").uncheck();
            expect(await page.locator("#terms").isChecked()).toBeFalsy();
            //await page.pause();
            await expect(Blink).toHaveAttribute("class","blinkingText");

           
         });
         test('Page Controls', async ({browser}) =>
            {
               const context = await browser.newContext();
               const page= await context.newPage();
               //const userEmail = page.locator('#userEmail');
               //chrome
               await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
               const documentlink=await page.locator("[href*='documents-request']");

               const [newPage]=await Promise.all([
                  context.waitForEvent('page'),
                  documentlink.click(),
               
               ])
               const text= await newPage.locator(".red").textContent();
               console.log(text);
               const arrayText= text.split("@");
               const domain= arrayText[1].split(" ")[0];
               console.log(domain);
               //await page.pause();
               await page.locator('#username').fill(domain);
               console.log(await page.locator('#username').textContent());
            });

            

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.getByLabel('Search', { exact: true }).click();
  await page.getByLabel('Search', { exact: true }).fill('rahulshettyacademy');
  await page.goto('https://www.google.com/search?q=rahulshettyacademy&sca_esv=935cae79d7589d76&source=hp&ei=YfZrZ5yeEa-Xvr0Pp7HYwQo&iflsig=AL9hbdgAAAAAZ2wEcXZywv0wafuZQXuGDRHIqxjlynAU&ved=0ahUKEwjc0teB8sKKAxWvi68BHacYNqgQ4dUDCBE&uact=5&oq=rahulshettyacademy&gs_lp=Egdnd3Mtd2l6IhJyYWh1bHNoZXR0eWFjYWRlbXkyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAESI8-UJgKWJE1cAF4AJABAJgB7gGgAaEYqgEGMC4xNC40uAEDyAEA-AEBmAIToAL5GKgCCsICChAuGAMY6gIYjwHCAgoQABgDGOoCGI8BwgIIEAAYgAQYsQPCAgsQLhiABBixAxiDAcICERAuGIAEGLEDGNEDGIMBGMcBwgILEAAYgAQYsQMYgwHCAg4QABiABBixAxiDARiKBcICERAuGIAEGLEDGNEDGMcBGIoFwgIOEC4YgAQYsQMY0QMYxwHCAggQLhiABBixA8ICBRAuGIAEwgIHEAAYgAQYCsICBxAuGIAEGAqYAwbxBYe9Jysf6uQ6kgcGMS4xMy41oAeepwE&sclient=gws-wiz');
  await page.getByRole('link', { name: 'Rahul Shetty Academy:' }).click();
  await page.getByRole('link', { name: 'Mentorship' }).click();
  await page.getByRole('link', { name: 'Home' }).click();
  await page.getByRole('link', { name: 'Mentorship' }).click();
  await page.getByRole('link', { name: 'Practice' }).click();
  await page.getByRole('link', { name: 'Home' }).click();
  await page.getByText('30 + Courses').click();
  await page.locator('#carousel-example-generic').getByRole('link', { name: 'JOIN NOW' }).click();
  await page.getByTestId('name-input').click();
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.getByTestId('email-input').click();
  await page.getByTestId('email-input').fill('hina.nazfatima@gmail.com');
  await page.getByTestId('btn-login').click();
});

