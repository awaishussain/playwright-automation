import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class CartPage extends BasePage {
  readonly checkoutButton: Locator;
  readonly cartItems: Locator;

  constructor(page: Page) {
    super(page);

    this.cartItems = page.locator('.cart_item');
    this.checkoutButton = page.getByRole('button', { name: 'Checkout' });
  }

  async assertItemPresentInCart(): Promise<void> {
    await expect(this.cartItems).not.toHaveCount(0);
  }

  async clickCheckout(): Promise<void> {
    await this.checkoutButton.click();
  }
}

