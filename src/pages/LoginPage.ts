import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';
import { getAutoHealingLocator } from '../utils/locatorHelper';


export class LoginPage extends BasePage {
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    super(page);

    this.usernameInput = page.getByPlaceholder('Username');
    this.passwordInput = page.getByPlaceholder('Password');
    this.loginButton = page.getByRole('button', { name: 'Login' });
    this.errorMessage = page.locator('[data-test="login-button"]');
  }

  async open(): Promise<void> {
    await this.navigate('https://www.saucedemo.com/');
  }

  async login(username: string, password: string) {
    const usernameInput = await getAutoHealingLocator(this.page, [
      '[data-test="username"]',
      '#user-name',
      'input[name="user-name"]'
    ]);

    const passwordInput = await getAutoHealingLocator(this.page, [
      '[data-test="password"]',
      '#password',
      'input[name="password"]'
    ]);

    const loginButton = await getAutoHealingLocator(this.page, [
      '[data-test="login-button"]',
      '#login-button'
    ]);

    await usernameInput.fill(username);
    await passwordInput.fill(password);
    await loginButton.click();
  
}
async isLoginSuccessful(): Promise<boolean> {
  return this.page.url().includes('inventory.html');
}
}


