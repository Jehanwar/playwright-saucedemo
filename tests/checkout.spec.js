import { test, expect } from '@playwright/test';
// test.use({ storageState: 'auth.json'});

test('Login SauceDemo', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/inventory.html');

    const buttonCart = page.locator('#add-to-cart-sauce-labs-bike-light');
    await buttonCart.click();

    const shopCart = page.locator('#shopping_cart_container > a');
    await shopCart.click();
    await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');

    const checkout = page.locator('#checkout'); 
    await checkout.click();
    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-one.html');

    const inputFirstName = page.locator('#first-name');
    await inputFirstName.fill('John');
    await expect(inputFirstName).toHaveValue('John');

    const inputLastName = page.locator('#last-name');
    await inputLastName.fill('Doe');
    await expect(inputLastName).toHaveValue('Doe');

    const inputPostalCode = page.locator('#postal-code');
    await inputPostalCode.fill('12345');
    await expect(inputPostalCode).toHaveValue('12345');

    const buttonContinue = page.locator('#continue');   
    await buttonContinue.click();
    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-two.html');

    const buttonFinish = page.locator('#finish');
    await buttonFinish.click();
    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-complete.html');

    const buttonBackHome = page.locator('#back-to-products');
    await buttonBackHome.click();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

});