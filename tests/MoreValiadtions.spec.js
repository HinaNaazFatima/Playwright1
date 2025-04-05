const {test, expect} = require('@playwright/test');
//test.describe.configure({mode:'parallel'});
test('PopUp', async ({page}) =>
{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    await page.goto("https://www.google.com/");
    await page.goBack();
    await page.goForward();
    await page.goBack();
    
    await expect(await page.getByPlaceholder("Hide/Show Example")).toBeVisible();
    await page.locator("#hide-textbox").click();
    await expect(await page.getByPlaceholder("Hide/Show Example")).toBeHidden();
    await page.pause();
    page.on("dialog",dialog=>dialog.accept());
    await page.locator("#confirmbtn").click();
    await page.locator("#mousehover").hover();
    const FramePage1=await page.frameLocator("courses-iframe");
    await page.locator('iframe[name="iframe-name"]').contentFrame().getByRole('link', { name: 'NEW All Access plan' }).click();
    //await FramePage1.contentFrame().locator("a[href='lifetime-access']:visible").click();
    const Frametextcontent=await page.locator('iframe[name="iframe-name"]').contentFrame().getByText("Join 13,522 Happy Subscibers!").textContent();
    //const Frametextcontent=FramePage1.locator(".text h2 ").textContent();
    console.log(Frametextcontent);
    console.log(Frametextcontent.split(" ")[1]);
});
test('Screenshot & visual comparision', async ({page}) =>
    {
        await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
        await page.locator("#displayed-text").screenshot({path:'partial Screenshot.png'});
        await expect(await page.getByPlaceholder("Hide/Show Example")).toBeVisible();
        await page.screenshot({path:' Screenshot.png'});
        await page.locator("#hide-textbox").click();
        await expect(await page.getByPlaceholder("Hide/Show Example")).toBeHidden();
        
    });

test('visual comparision', async ({page}) =>
   {
            await page.goto("https://www.flightaware.com/");
            //expect (await page.screenshot()).toMatchSnapshot("landing.png");
            
            
    });