import { test } from '@playwright/test';
import { LoginPage } from '../../src/pages/LoginPage';
import { InventoryPage } from '../../src/pages/InventoryPage';

test.describe('Authentication - Login', () => {

   test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.open();
  });


  test('Standard user can login successfully', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    // Step 1: Open login page
    await loginPage.open();

    // Step 2: Perform login
    await loginPage.login('standard_user', 'secret_sauce');

    // Step 3: Verify user reached inventory page
    await inventoryPage.assertUserIsOnInventoryPage();
  });

});
