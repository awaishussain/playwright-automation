import { test, expect } from '@playwright/test';
import { LoginPage } from '../../src/pages/LoginPage';
import { InventoryPage } from '../../src/pages/InventoryPage';

test.describe('Authentication - Multiple Users', () => {

  const users = [
    { username: 'standard_user', password: 'secret_sauce' },
    { username: 'performance_glitch_user', password: 'secret_sauce' }
  ];

  for (const user of users) {
    test(`User ${user.username} can login successfully`, async ({ page }) => {

      const loginPage = new LoginPage(page);
      const inventoryPage = new InventoryPage(page);

      await loginPage.open();
      await loginPage.login(user.username, user.password);

      await inventoryPage.assertUserIsOnInventoryPage();
    });
  }

});
