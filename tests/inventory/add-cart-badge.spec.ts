import { test } from '@playwright/test';
import { LoginPage } from '../../src/pages/LoginPage';
import { InventoryPage } from '../../src/pages/InventoryPage';

test.describe('Inventory - Add to Cart Badge', () => {

  test('add-cart-badge-check', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    // Login
    await loginPage.open();
    await loginPage.login('standard_user', 'secret_sauce');

    // Add item to cart
    await inventoryPage.addFirstItemToCart();

    // Verify cart badge
    await inventoryPage.assertCartBadgeCount(1);
      //await page.waitForTimeout(5000); // 5 seconds
  });

});
