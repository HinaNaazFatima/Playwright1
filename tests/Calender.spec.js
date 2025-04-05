const {test, expect} = require('@playwright/test');
test('Playwright Special Locators', async ({page}) =>
{
    const MonthNum='6';
    const dayNum="15";
    const year='2027';
    const Expectedlist=[MonthNum, dayNum,year];
    await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers");
    await page.locator(".react-date-picker__calendar-button__icon").click();
    await page.locator(".react-calendar__navigation__label").click();
    await page.locator(".react-calendar__navigation__label").click();
    await page.getByText(year).click();
    await page.locator(".react-calendar__year-view__months__month").nth(Number(MonthNum)-1).click();
    await page.locator("//abbr[text()='"+dayNum+"']").click();
    const input=await page.locator(".react-date-picker__inputGroup input");
    for(let i=0;i<input.length;i++)
    {
        const ActualResult=input[i].getAttribute("value");
        expect(ActualResult).toEqual(Expectedlist[i]);
    }
});

