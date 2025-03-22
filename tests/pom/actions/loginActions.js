import loginLocator from "../locator/loginLocator";
import { expect } from "@playwright/test";

export default class loginActions {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        this.loginLocator = new loginLocator();
        this.inputUsername = page.locator(this.loginLocator.inputUsername);
        this.inputPassword = page.locator(this.loginLocator.inputPassword);
        this.clickButton = page.locator(this.loginLocator.buttonLogin);
        this.validateUrl = 'https://www.saucedemo.com/inventory.html';
        this.addItem = page.locator(this.loginLocator.addItem);
        this.shopCart = page.locator(this.loginLocator.shopCart);
        this.checkout = page.locator(this.loginLocator.checkout);
        this.inputfirstName = page.locator(this.loginLocator.inputFirstName);
        this.inputLastName = page.locator(this.loginLocator.inputLastName);
        this.inputPostalCode = page.locator(this.loginLocator.inputPostalCode);
        this.buttonContinue = page.locator(this.loginLocator.buttonContinue);
        this.buttonFinish = page.locator(this.loginLocator.buttonFinish);
        this.buttonBackHome = page.locator(this.loginLocator.buttonBackHome);
    }

    async goto() {
        await this.page.goto('https://www.saucedemo.com/');
    }

    async inputLogin() {
        await this.inputUsername.fill('standard_user');
        await expect(this.inputUsername).toHaveValue('standard_user');

        await this.inputPassword.fill('secret_sauce');
        await expect(this.inputPassword).toHaveValue('secret_sauce');   

        await this.clickButton.click();
    }

    async validateLogin() {
        await expect(this.page).toHaveURL(this.validateUrl);
    }

    async   addItemToCart() {
        await this.addItem.click();
    }

    async goToCart() {
        await this.shopCart.click();
    }

    async goToCheckout() {
        await this.checkout.click();
    }

    async inputCheckout() {
        await this.inputfirstName.fill('John');
        await this.inputLastName.fill('Doe');
        await this.inputPostalCode.fill('kolokota');
        await this.buttonContinue.click();
    }  

    async finishCheckout() {
        await this.buttonFinish.click();
    }   

    async backHome() { 
        await this.buttonBackHome.click();
    }










    
}