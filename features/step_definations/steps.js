const assert = require('assert')
const {test, expect, playwright} = require('@playwright/test');
const{Browser, chromium, Page} = require('playwright');
const {Given, When, Then } = require('@cucumber/cucumber')
//const { Greeter } = require('../../src')
const {POManager}=require('../../Pageobjects/POManager');

Given('a login to Ecommerce app with {string} and {string}', {timeout : 100*1000}, async function (username, password) {
    // Write code here that turns the phrase above into concrete actions
     const browser=await chromium.launch({ headless: false, timeout: 500000 });
     const context = await browser.newContext();
     const page= await context.newPage();
    this.poManager=new POManager(page);
    const loginPage= this.poManager.getLoginPage();
    await loginPage.goTo();
    await loginPage.validLogin(username,password);
    //await expect(page).toHaveTitle("Let's Shop");
    //await expect(this.page).toHaveTitle("Let's Shop");
  });

  When('Add {string} to cart',async function (item) {
    const dashboardPage= this.poManager.getDashboardPage();
        await dashboardPage.SearchProduct(item);
        await dashboardPage.NavigateToCart();
  });

  Then('Verify is displayed in the cart', async function () {
    const cartpage= this.poManager.getCartPage();
        await cartpage.MyCartlist();

  });

  When('Enter valid details and place the order', async function () {
        const placeOrderPage= this.poManager.getplaceOrderPage();
          await placeOrderPage.SelectCountry(' India');
          await placeOrderPage.verifyEmail("hina.nazfatima@gmail.com")
  });

  Then('Verify order is present in order history', async function () {
    const thankyouPage= this.poManager.getthankyouPage();
          await thankyouPage.ConfirmOrder();
  });