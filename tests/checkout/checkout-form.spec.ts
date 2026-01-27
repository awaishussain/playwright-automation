import { test } from '@playwright/test';
import { LoginPage } from '../../src/pages/LoginPage';
import { InventoryPage } from '../../src/pages/InventoryPage';
import { CartPage } from '../../src/pages/CartPage';
import { CheckoutPage } from '../../src/pages/CheckoutPage';

test.describe('Checkout - Form Validation', () => {
  test('Checkout fields are visible', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    await loginPage.open();
    await loginPage.login('standard_user', 'secret_sauce');

    // Add first product to cart
    await inventoryPage.addFirstProductToCart();

    // Go to cart
    await inventoryPage.clickCart();

    // Verify item exists
    await cartPage.assertItemPresentInCart();

    // Click checkout
    await cartPage.clickCheckout();

    // Assert we are on checkout page
    await checkoutPage.assertOnCheckoutPage();

    // Validate fields
    await checkoutPage.validateCheckoutFields();
  });
});
