import { test, expect } from '@playwright/test';
import { LoginPage } from '../../src/pages/LoginPage';
import { InventoryPage } from '../../src/pages/InventoryPage';
import { CartPage } from '../../src/pages/CartPage';

test.describe('Checkout - Cart to Checkout', () => {

  test('user can proceed from cart to checkout', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);

    // Login
    await loginPage.open();
    await loginPage.login('standard_user', 'secret_sauce');

    // Add item
    await inventoryPage.addFirstItemToCart();

    // Go to cart
    await inventoryPage.goToCart();

    // Verify cart & proceed
    await cartPage.assertItemPresentInCart();
    await cartPage.clickCheckout();
    await expect(page).toHaveURL(/checkout-step-one.html/);
    console.log("/checkout-step-one.html/ .... found");

  });

});
