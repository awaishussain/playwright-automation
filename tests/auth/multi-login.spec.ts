//import { test } from '@playwright/test';
import { LoginPage } from '../../src/pages/LoginPage';
import { test, expect } from '@playwright/test';



const users = [
  { username: 'standard_user', password: 'secret_sauce' },
  { username: 'problem_user', password: 'secret_sauce' }
];

test.describe('Multi-login test', () => {

  for (const user of users) {
    test(`Login works for ${user.username}`, async ({ page }) => {
      const loginPage = new LoginPage(page);

      await loginPage.open();
      await loginPage.login(user.username, user.password);

      const loginSuccess = await loginPage.isLoginSuccessful();
      expect(loginSuccess).toBe(true);

    });
  }

});
