const {test, expect} = require('@playwright/test');
class CartPage{
    constructor(page)
    {
        this.page=page;
        this.cartItems= page.locator("text=ZARA COAT 3");
        this.checkoutbutton=page.locator("text=Checkout");

    }
    async MyCartlist()
    {
        //await  this.page.pause();
        //this.cartItems= this.page.locator(items);
        //this.checkoutbutton=this.page.locator("text=Checkout");
        await this.page.locator(".itemImg").last().waitFor();
         //await page.waitForLoadState("networkidle");
                
         const bool1 = await this.cartItems.isVisible();
         await expect(bool1).toBeTruthy();
         await  this.checkoutbutton.click();
         
         await this.page.screenshot({path:'cartpage.png'});

    }

}
module.exports={CartPage};