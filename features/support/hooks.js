// const {test, expect, playwright} = require('@playwright/test');
// const{Browser, chromium, Page} = require('playwright');
// const {Before,After} = require('@cucumber/cucumber')
// const {POManager}=require('../../Pageobjects/POManager');

// Before(async function () {

//     const browser=await chromium.launch({ headless: false});
//     const context = await browser.newContext();
//     const page= await context.newPage();
//    // this.poManager=new POManager(page);
//   });
  
//   After(function () {
//     // perform some shared teardown
//     console.log("i'm the last ")
//   });